import { errors } from '@strapi/utils';
const { ApplicationError } = errors;

export default {
  async beforeUpdate(event: any) {
    const { data, where } = event.params;
    
    // Concurrency-safe backend validation: If assignedProject is being updated
    if (data.assignedProject && data.assignedProject !== 'Unassigned' && data.assignedProject !== 'None') {
      // Find current worker in DB using atomic query
      const currentWorker = await strapi.db.query('api::worker.worker').findOne({ where });
      
      if (currentWorker && currentWorker.assignedProject && 
          currentWorker.assignedProject !== 'Unassigned' && 
          currentWorker.assignedProject !== 'None' && 
          currentWorker.assignedProject !== data.assignedProject) {
        
        // Single Active Site Rule: Worker cannot have two active site assignments concurrently.
        // A transfer or reassignment MUST close the prior active assignment first.
        const history = Array.isArray(currentWorker.projectHistory) ? currentWorker.projectHistory : [];
        const hasOpenPriorAssignment = history.some((h: any) => 
          h.status === 'Active on Site' && h.project === currentWorker.assignedProject
        );

        if (hasOpenPriorAssignment) {
          // If the update payload did not properly update projectHistory to close the old assignment,
          // automatically enforce closure server-side to guarantee zero concurrent active sites
          const updatedHistory = history.map((h: any) => {
            if (h.status === 'Active on Site') {
              return {
                ...h,
                period: `${h.period?.split(' - ')[0] || 'Earlier'} - ${new Date().toLocaleDateString('en-GB')}`,
                status: 'Transferred / Closed'
              };
            }
            return h;
          });

          updatedHistory.push({
            project: data.assignedProject,
            site: 'Operations',
            role: currentWorker.skill || 'Tradesperson',
            period: `${new Date().toLocaleDateString('en-GB')} - Present`,
            supervisor: data.supervisorName || currentWorker.supervisorName || 'Site Operations',
            status: 'Active on Site'
          });

          data.projectHistory = updatedHistory;
          strapi.log.info(`[Structiva Enterprise] Enforced single-active-site closure for worker ${currentWorker.code}: Closed '${currentWorker.assignedProject}' -> Activated '${data.assignedProject}'`);
        }
      }
    }
  },

  async beforeCreate(event: any) {
    const { data } = event.params;
    // Check duplicate phone if provided
    if (data.phone) {
      const cleanPhone = data.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length >= 10) {
        const existing = await strapi.db.query('api::worker.worker').findOne({
          where: {
            phone: {
              $contains: cleanPhone.slice(-10)
            }
          }
        });
        if (existing) {
          throw new ApplicationError(`Worker with mobile number ending in ${cleanPhone.slice(-4)} is already registered with code ${existing.code}. Duplicate registrations are strictly forbidden.`);
        }
      }
    }
  }
};

