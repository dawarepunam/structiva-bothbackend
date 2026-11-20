import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApprovalsConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_approvals_configs';
  info: {
    description: 'Centralized workflow configuration for admin approvals';
    displayName: 'Approvals Configuration';
    icon: 'check';
  };
  attributes: {
    autoEscalatePendingHours: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<48>;
    enableMultiTierApproval: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    notifySupervisorOnDecision: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface AdminAttendanceConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_attendance_configs';
  info: {
    description: 'Admin configuration for shifts and attendance muster';
    displayName: 'Attendance Configuration';
    icon: 'calendar';
  };
  attributes: {
    fullDayThresholdHours: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<8>;
    halfDayThresholdHours: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<4.5>;
    shiftEndTime: Schema.Attribute.String & Schema.Attribute.DefaultTo<'17:30'>;
    shiftStartTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'08:30'>;
  };
}

export interface AdminDashboardConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_dashboard_configs';
  info: {
    description: 'Configuration and metrics overview for Admin Dashboard';
    displayName: 'Dashboard Configuration';
    icon: 'chartBubble';
  };
  attributes: {
    enableRealtimeSync: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    fiscalYear: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2026-2027'>;
    portfolioTargetBudget: Schema.Attribute.Decimal;
    refreshIntervalSeconds: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<30>;
  };
}

export interface AdminDprReportsConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_dpr_reports_configs';
  info: {
    description: 'Admin configuration for daily progress reports';
    displayName: 'DPR & Reports Configuration';
    icon: 'write';
  };
  attributes: {
    dprSubmissionCutoffTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'22:00'>;
    requireDailyMachineryLog: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    requireWorkforceHeadcountBreakdown: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface AdminFuelManagementConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_fuel_management_configs';
  info: {
    description: 'Admin configuration for fuel logs and procurement';
    displayName: 'Fuel Management Configuration';
    icon: 'database';
  };
  attributes: {
    maxFuelDispensePerLogLitres: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<300>;
    requireReceiptAttachment: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    standardDieselRate: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<92.5>;
  };
}

export interface AdminIssuesIncidentsConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_issues_incidents_configs';
  info: {
    description: 'Admin configuration for safety and defect management';
    displayName: 'Issues & Incidents Configuration';
    icon: 'shield';
  };
  attributes: {
    criticalIncidentEscalationMinutes: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<30>;
    ehsOfficerEmail: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'safety@structiva.internal'>;
    zeroToleranceEnforcement: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface AdminMainAdmin extends Struct.ComponentSchema {
  collectionName: 'components_admin_main_admins';
  info: {
    description: 'Comprehensive administrative orchestration component holding module configurations';
    displayName: 'Main Admin';
    icon: 'shield';
  };
  attributes: {
    approvalsConfig: Schema.Attribute.Component<
      'admin.approvals-config',
      false
    >;
    attendanceConfig: Schema.Attribute.Component<
      'admin.attendance-config',
      false
    >;
    dashboardConfig: Schema.Attribute.Component<
      'admin.dashboard-config',
      false
    >;
    dprReportsConfig: Schema.Attribute.Component<
      'admin.dpr-reports-config',
      false
    >;
    fuelManagementConfig: Schema.Attribute.Component<
      'admin.fuel-management-config',
      false
    >;
    issuesIncidentsConfig: Schema.Attribute.Component<
      'admin.issues-incidents-config',
      false
    >;
    materialProcurementConfig: Schema.Attribute.Component<
      'admin.material-procurement-config',
      false
    >;
    projectsConfig: Schema.Attribute.Component<'admin.projects-config', false>;
    reportsConfig: Schema.Attribute.Component<'admin.reports-config', false>;
    siteActivitiesConfig: Schema.Attribute.Component<
      'admin.site-activities-config',
      false
    >;
    siteExpensesConfig: Schema.Attribute.Component<
      'admin.site-expenses-config',
      false
    >;
    vehiclesMachineryConfig: Schema.Attribute.Component<
      'admin.vehicles-machinery-config',
      false
    >;
    workforceConfig: Schema.Attribute.Component<
      'admin.workforce-config',
      false
    >;
  };
}

export interface AdminMaterialProcurementConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_material_procurement_configs';
  info: {
    description: 'Admin configuration for materials indent and inventory';
    displayName: 'Material Procurement Configuration';
    icon: 'layer';
  };
  attributes: {
    defaultIndentLeadTimeDays: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<3>;
    enableLowStockAlerts: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    requireThreeVendorQuotesAbove: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<50000>;
  };
}

export interface AdminProjectsConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_projects_configs';
  info: {
    description: 'Admin configuration for projects and sites tracking';
    displayName: 'Projects & Sites Configuration';
    icon: 'building';
  };
  attributes: {
    allowSupervisorSelfAssignment: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    autoLockCompletedProjects: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    defaultCurrency: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'INR'>;
  };
}

export interface AdminReportsConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_reports_configs';
  info: {
    description: 'Configuration for analytical reports and exports';
    displayName: 'Reports Configuration';
    icon: 'file';
  };
  attributes: {
    enableAutomatedWeeklyDigest: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    exportFormatsAllowed: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CSV, XLSX, PDF'>;
  };
}

export interface AdminSiteActivitiesConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_site_activities_configs';
  info: {
    description: 'Admin rules for task and site activity logging';
    displayName: 'Site Activities Configuration';
    icon: 'bulletList';
  };
  attributes: {
    allowBackdatedActivityHours: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<24>;
    requireGeoTagVerification: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface AdminSiteExpensesConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_site_expenses_configs';
  info: {
    description: 'Admin configuration for site petty cash and expense claims';
    displayName: 'Site Expenses Configuration';
    icon: 'shoppingCart';
  };
  attributes: {
    disbursementMode: Schema.Attribute.Enumeration<
      ['Bank Transfer', 'Petty Cash', 'UPI Commercial', 'Corporate Card']
    > &
      Schema.Attribute.DefaultTo<'Bank Transfer'>;
    requireTaxInvoiceAboveAmount: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1000>;
    supervisorInstantApprovalLimit: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<5000>;
  };
}

export interface AdminVehiclesMachineryConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_vehicles_machinery_configs';
  info: {
    description: 'Admin configuration for heavy fleet and vehicle assets';
    displayName: 'Vehicles & Machinery Configuration';
    icon: 'car';
  };
  attributes: {
    maintenanceAlertHours: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<250>;
    maintenanceAlertMileageKm: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<5000>;
    requirePreShiftInspection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface AdminWorkforceConfig extends Struct.ComponentSchema {
  collectionName: 'components_admin_workforce_configs';
  info: {
    description: 'Admin rules for trade workers and supervisors';
    displayName: 'Workforce Configuration';
    icon: 'user';
  };
  attributes: {
    defaultDailyWageSkilled: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<850>;
    defaultDailyWageUnskilled: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<550>;
    overtimeMultiplier: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1.5>;
    requireAdminApprovalForWorkers: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    description: 'About section editorial and pillars';
    displayName: 'About Section';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    experienceYears: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'18+'>;
    machineryUnits: Schema.Attribute.String & Schema.Attribute.DefaultTo<'85+'>;
    projectsCompleted: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'250+'>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Quality Work Is Our Backbone.'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    workforceStrength: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'1,200+'>;
  };
}

export interface HomeContact extends Struct.ComponentSchema {
  collectionName: 'components_home_contacts';
  info: {
    description: 'Company contact coordinates';
    displayName: 'Contact Section';
    icon: 'mail';
  };
  attributes: {
    address: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'STRUCTIVA Towers, Plot 42, Kharadi Central Boulevard, Pune, Maharashtra 411014'>;
    email: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'corporate@structiva.internal'>;
    phone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 (020) 4123 8800'>;
  };
}

export interface HomeCta extends Struct.ComponentSchema {
  collectionName: 'components_home_ctas';
  info: {
    description: 'Call to action banner';
    displayName: 'CTA Section';
    icon: 'phone';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Our Team'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Let's discuss your project requirements and explore how STRUCTIVA can support your execution goals.">;
    headline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Have an Infrastructure Project in Mind?'>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: 'Hero section banner and messaging';
    displayName: 'Hero Section';
    icon: 'picture';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/images/commercial_tower.jpg'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore Our Services'>;
    headline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Engineering with Precision. Execution with Responsibility.'>;
    secondaryCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Discuss Your Project'>;
    subheadline: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomeHome extends Struct.ComponentSchema {
  collectionName: 'components_home_homes';
  info: {
    description: 'Main reusable Home component composing nested homepage sections';
    displayName: 'Home';
    icon: 'house';
  };
  attributes: {
    about: Schema.Attribute.Component<'home.about', false>;
    contact: Schema.Attribute.Component<'home.contact', false>;
    cta: Schema.Attribute.Component<'home.cta', false>;
    hero: Schema.Attribute.Component<'home.hero', false>;
  };
}

export interface SupervisorActivitiesConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_activities_configs';
  info: {
    description: 'Shift activity logs, engineering milestones and task progress';
    displayName: 'Supervisor Activities Configuration';
    icon: 'bulletList';
  };
  attributes: {
    allowDirectProgressUpdate: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    requirePhotoWithActivity: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorAttendanceConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_attendance_configs';
  info: {
    description: 'Shift muster rules, late cutoffs, and biometric sync';
    displayName: 'Supervisor Attendance Configuration';
    icon: 'calendar';
  };
  attributes: {
    allowSupervisorSelfPunch: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    morningMusterCutoff: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'09:15'>;
    nightShiftAllowed: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorDashboardConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_dashboard_configs';
  info: {
    description: 'Supervisor shift overview and assigned site dashboard settings';
    displayName: 'Supervisor Dashboard Configuration';
    icon: 'dashboard';
  };
  attributes: {
    defaultSiteId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'SITE-PNQ-01'>;
    enableDprReminders: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showWeatherForecast: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorDprConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_dpr_configs';
  info: {
    description: 'Daily Progress Report submission parameters and checklist';
    displayName: 'Supervisor DPR Configuration';
    icon: 'write';
  };
  attributes: {
    mandatoryDprPhotosCount: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<3>;
    requireFuelConsumptionAudit: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    requireLaborCountVerification: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorExpensesConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_expenses_configs';
  info: {
    description: 'Field petty cash submission constraints';
    displayName: 'Supervisor Expenses Configuration';
    icon: 'shoppingCart';
  };
  attributes: {
    dailyVoucherSubmissionLimit: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<10000>;
    requireVendorReceiptAttachment: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorFuelConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_fuel_configs';
  info: {
    description: 'Diesel bowser disbursement checks and dip-stick meter logs';
    displayName: 'Supervisor Fuel Configuration';
    icon: 'database';
  };
  attributes: {
    fuelDisbursementCutoffTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'18:00'>;
    requireHourMeterReading: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorIssuesConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_issues_configs';
  info: {
    description: 'Hazard incident reporting and immediate safety halts';
    displayName: 'Supervisor Issues Configuration';
    icon: 'shield';
  };
  attributes: {
    allowWorkHaltOnSafetyHazard: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    mandatoryAccidentReportWithinMins: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<15>;
  };
}

export interface SupervisorMachineryConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_machinery_configs';
  info: {
    description: 'Site plant and vehicle operating checks';
    displayName: 'Supervisor Machinery Configuration';
    icon: 'car';
  };
  attributes: {
    enablePreStartInspection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    reportBreakdownImmediately: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorMainSupervisor extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_main_supervisors';
  info: {
    description: 'Central master configuration component for all supervisor operational settings';
    displayName: 'Main Supervisor';
    icon: 'shield';
  };
  attributes: {
    activitiesConfig: Schema.Attribute.Component<
      'supervisor.activities-config',
      false
    >;
    attendanceConfig: Schema.Attribute.Component<
      'supervisor.attendance-config',
      false
    >;
    dashboardConfig: Schema.Attribute.Component<
      'supervisor.dashboard-config',
      false
    >;
    dprConfig: Schema.Attribute.Component<'supervisor.dpr-config', false>;
    expensesConfig: Schema.Attribute.Component<
      'supervisor.expenses-config',
      false
    >;
    fuelConfig: Schema.Attribute.Component<'supervisor.fuel-config', false>;
    issuesConfig: Schema.Attribute.Component<'supervisor.issues-config', false>;
    machineryConfig: Schema.Attribute.Component<
      'supervisor.machinery-config',
      false
    >;
    materialRequestsConfig: Schema.Attribute.Component<
      'supervisor.material-requests-config',
      false
    >;
    notificationsConfig: Schema.Attribute.Component<
      'supervisor.notifications-config',
      false
    >;
    profileConfig: Schema.Attribute.Component<
      'supervisor.profile-config',
      false
    >;
    projectConfig: Schema.Attribute.Component<
      'supervisor.project-config',
      false
    >;
    settingsConfig: Schema.Attribute.Component<
      'supervisor.settings-config',
      false
    >;
    siteConfig: Schema.Attribute.Component<'supervisor.site-config', false>;
    tasksConfig: Schema.Attribute.Component<'supervisor.tasks-config', false>;
    workforceConfig: Schema.Attribute.Component<
      'supervisor.workforce-config',
      false
    >;
  };
}

export interface SupervisorMaterialRequestsConfig
  extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_material_requests_configs';
  info: {
    description: 'Emergency material indent and stock requisition limits';
    displayName: 'Supervisor Material Requests Configuration';
    icon: 'layer';
  };
  attributes: {
    allowEmergencyIndent: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    urgentDeliveryTimeHours: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<12>;
  };
}

export interface SupervisorNotificationsConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_notifications_configs';
  info: {
    description: 'SMS and in-app alerts for shift events and approval decisions';
    displayName: 'Supervisor Notifications Configuration';
    icon: 'bell';
  };
  attributes: {
    enablePushNotifications: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enableSmsAlerts: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SupervisorProfileConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_profile_configs';
  info: {
    description: 'Supervisor identity, designation, and field assignment parameters';
    displayName: 'Supervisor Profile Configuration';
    icon: 'user';
  };
  attributes: {
    allowProfilePhoneUpdate: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    emergencyContactNumber: Schema.Attribute.String;
    reportingHead: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Er. Rajesh Kulkarni (Project Director)'>;
  };
}

export interface SupervisorProjectConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_project_configs';
  info: {
    description: 'Assigned projects and site bounds';
    displayName: 'Supervisor Project Configuration';
    icon: 'building';
  };
  attributes: {
    assignedProjectCode: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'PRJ-SKY-01'>;
    assignedProjectName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Skyline Commercial Complex (Tower A)'>;
    clientAuthority: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Prestige Global Infrastructures Ltd'>;
  };
}

export interface SupervisorSettingsConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_settings_configs';
  info: {
    description: 'Supervisor workspace preferences and language defaults';
    displayName: 'Supervisor Settings Configuration';
    icon: 'cog';
  };
  attributes: {
    interfaceLanguage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'English'>;
    offlineSyncEnabled: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SupervisorSiteConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_site_configs';
  info: {
    description: 'Site geofence and localized perimeter controls';
    displayName: 'Supervisor Site Configuration';
    icon: 'pinMap';
  };
  attributes: {
    geofenceRadiusMeters: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<350>;
    siteName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Tower A Construction Zone'>;
    siteSafetyLevel: Schema.Attribute.Enumeration<
      ['Level-1 Standard', 'Level-2 Elevated Hazard', 'Level-3 Zero Tolerance']
    > &
      Schema.Attribute.DefaultTo<'Level-3 Zero Tolerance'>;
  };
}

export interface SupervisorTasksConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_tasks_configs';
  info: {
    description: 'Trade crew task delegation and verification checklist';
    displayName: 'Supervisor Tasks Configuration';
    icon: 'check';
  };
  attributes: {
    autoCloseCompletedTasks: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    maxActiveTasksPerCrew: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface SupervisorWorkforceConfig extends Struct.ComponentSchema {
  collectionName: 'components_supervisor_workforce_configs';
  info: {
    description: 'Rules for field labor registration and supervisor muster scoping';
    displayName: 'Supervisor Workforce Configuration';
    icon: 'users';
  };
  attributes: {
    allowWorkerFieldEnrollment: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    pendingApprovalThresholdDays: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<3>;
    requirePhotoOnRegistration: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerActivitiesConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_activities_configs';
  info: {
    description: 'Daily site log activities and trade execution logs';
    displayName: 'Activities Config';
    icon: 'clock';
  };
  attributes: {
    enableActivitySubmission: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    trackWorkHours: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerAdvanceConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_advance_configs';
  info: {
    description: 'Salary advance limits, approval rules and installment deduction rules';
    displayName: 'Advance Config';
    icon: 'hand';
  };
  attributes: {
    maxAdvancePercentage: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<50>;
    maxInstallments: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    requireAdminApproval: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    requireSupervisorApproval: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerAttendanceConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_attendance_configs';
  info: {
    description: 'Muster roll, shift hours and overtime calculation policies for workers';
    displayName: 'Attendance Config';
    icon: 'calendar';
  };
  attributes: {
    allowSelfCheckIn: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    overtimeThresholdHours: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<8.5>;
    regularShiftHours: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<8>;
    requireSupervisorVerification: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerDashboardConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_dashboard_configs';
  info: {
    description: 'Configuration settings for Worker Mobile/Desktop Shift Dashboard';
    displayName: 'Dashboard Config';
    icon: 'apps';
  };
  attributes: {
    enableEmergencySos: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enableShiftClockIn: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    refreshIntervalSeconds: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<30>;
    showWageSummary: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    welcomeMessage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Welcome to STRUCTIVA Trade Operations'>;
  };
}

export interface WorkerDocumentsConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_documents_configs';
  info: {
    description: 'Identity proofs, trade certifications, insurance and contract documents';
    displayName: 'Documents Config';
    icon: 'folder';
  };
  attributes: {
    allowedFileFormats: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'pdf,jpg,png,jpeg'>;
    maxFileSizeMb: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    requireAadhaarVerification: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerLeaveConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_leave_configs';
  info: {
    description: 'Annual, casual and sick leave allocations and balance tracking for workers';
    displayName: 'Leave Config';
    icon: 'plane';
  };
  attributes: {
    casualLeaveDaysPerYear: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<7>;
    paidLeaveDaysPerYear: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<15>;
    requiresAdvanceNoticeDays: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<2>;
    sickLeaveDaysPerYear: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
  };
}

export interface WorkerMainWorker extends Struct.ComponentSchema {
  collectionName: 'components_worker_main_workers';
  info: {
    description: 'Central master configuration component for all worker portal operational settings';
    displayName: 'Main Worker';
    icon: 'user';
  };
  attributes: {
    activitiesConfig: Schema.Attribute.Component<
      'worker.activities-config',
      false
    >;
    advanceConfig: Schema.Attribute.Component<'worker.advance-config', false>;
    attendanceConfig: Schema.Attribute.Component<
      'worker.attendance-config',
      false
    >;
    dashboardConfig: Schema.Attribute.Component<
      'worker.dashboard-config',
      false
    >;
    documentsConfig: Schema.Attribute.Component<
      'worker.documents-config',
      false
    >;
    leaveConfig: Schema.Attribute.Component<'worker.leave-config', false>;
    notificationsConfig: Schema.Attribute.Component<
      'worker.notifications-config',
      false
    >;
    payrollConfig: Schema.Attribute.Component<'worker.payroll-config', false>;
    payslipConfig: Schema.Attribute.Component<'worker.payslip-config', false>;
    profileConfig: Schema.Attribute.Component<'worker.profile-config', false>;
    projectConfig: Schema.Attribute.Component<'worker.project-config', false>;
    safetyConfig: Schema.Attribute.Component<'worker.safety-config', false>;
    settingsConfig: Schema.Attribute.Component<'worker.settings-config', false>;
    siteConfig: Schema.Attribute.Component<'worker.site-config', false>;
    supportConfig: Schema.Attribute.Component<'worker.support-config', false>;
    tasksConfig: Schema.Attribute.Component<'worker.tasks-config', false>;
  };
}

export interface WorkerNotificationsConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_notifications_configs';
  info: {
    description: 'Site push notifications, SMS alerts and shift schedule broadcasts';
    displayName: 'Notifications Config';
    icon: 'bell';
  };
  attributes: {
    enablePushNotifications: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enableSmsAlerts: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    notifyShiftChanges: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    notifyWageDisbursals: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerPayrollConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_payroll_configs';
  info: {
    description: 'Base trade wage rates, statutory deductions (PF/ESIC) and disbursal cycles';
    displayName: 'Payroll Config';
    icon: 'database';
  };
  attributes: {
    esicDeductionPercentage: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0.75>;
    payoutCycle: Schema.Attribute.Enumeration<
      ['Weekly', 'Bi-Weekly', 'Monthly']
    > &
      Schema.Attribute.DefaultTo<'Monthly'>;
    pfDeductionPercentage: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<12>;
    standardWorkDaysPerMonth: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<26>;
  };
}

export interface WorkerPayslipConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_payslip_configs';
  info: {
    description: 'Digital wage slip generation, download and verification settings';
    displayName: 'Payslip Config';
    icon: 'file';
  };
  attributes: {
    authorizedSignatory: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STRUCTIVA HR & Site Finance Department'>;
    enablePdfDownload: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showOvertimeBreakup: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerProfileConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_profile_configs';
  info: {
    description: 'Worker personal details, skill certifications and banking settings';
    displayName: 'Profile Config';
    icon: 'user';
  };
  attributes: {
    allowBankDetailsEdit: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    allowProfilePhotoUpload: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    contactSupportPhone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 98220 00000'>;
    requireKycVerification: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerProjectConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_project_configs';
  info: {
    description: 'Configuration for worker project allocations and site details';
    displayName: 'Project Config';
    icon: 'briefcase';
  };
  attributes: {
    allowProjectSwitching: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showContractValue: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showSupervisorContact: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerSafetyConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_safety_configs';
  info: {
    description: 'PPE compliance checklist, toolbox talk attendance and emergency protocols';
    displayName: 'Safety Config';
    icon: 'shield';
  };
  attributes: {
    emergencySosContact: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 98220 99999'>;
    mandatoryPpeList: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Safety Helmet, High-Vis Vest, Steel-Toe Safety Boots, Cut-Resistant Gloves'>;
    requireDailySafetyCheck: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface WorkerSettingsConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_settings_configs';
  info: {
    description: 'Account security, language preference, theme and session settings for worker portal';
    displayName: 'Settings Config';
    icon: 'cog';
  };
  attributes: {
    defaultLanguage: Schema.Attribute.Enumeration<
      ['English', 'Marathi', 'Hindi']
    > &
      Schema.Attribute.DefaultTo<'English'>;
    enableTwoFactor: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    sessionTimeoutMinutes: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<120>;
  };
}

export interface WorkerSiteConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_site_configs';
  info: {
    description: 'Configuration for active job site geolocation and check-in parameters';
    displayName: 'Site Config';
    icon: 'pin';
  };
  attributes: {
    emergencyContactNumber: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 (020) 4123 8800'>;
    enforceGeofence: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    geofenceRadiusMeters: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<300>;
  };
}

export interface WorkerSupportConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_support_configs';
  info: {
    description: 'Grievance redressal, site supervisor hotline and HR assistance contacts';
    displayName: 'Support Config';
    icon: 'phone';
  };
  attributes: {
    supportEmail: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'support@structiva.internal'>;
    supportHours: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Monday - Saturday: 08:30 AM \u2013 06:30 PM IST'>;
    supportPhone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 (020) 4123 8800'>;
  };
}

export interface WorkerTasksConfig extends Struct.ComponentSchema {
  collectionName: 'components_worker_tasks_configs';
  info: {
    description: 'Configuration for worker work order execution, remarks and status transitions';
    displayName: 'Tasks Config';
    icon: 'check';
  };
  attributes: {
    allowDirectCompletion: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    allowWorkerRemarks: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    requirePhotoEvidence: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'admin.approvals-config': AdminApprovalsConfig;
      'admin.attendance-config': AdminAttendanceConfig;
      'admin.dashboard-config': AdminDashboardConfig;
      'admin.dpr-reports-config': AdminDprReportsConfig;
      'admin.fuel-management-config': AdminFuelManagementConfig;
      'admin.issues-incidents-config': AdminIssuesIncidentsConfig;
      'admin.main-admin': AdminMainAdmin;
      'admin.material-procurement-config': AdminMaterialProcurementConfig;
      'admin.projects-config': AdminProjectsConfig;
      'admin.reports-config': AdminReportsConfig;
      'admin.site-activities-config': AdminSiteActivitiesConfig;
      'admin.site-expenses-config': AdminSiteExpensesConfig;
      'admin.vehicles-machinery-config': AdminVehiclesMachineryConfig;
      'admin.workforce-config': AdminWorkforceConfig;
      'home.about': HomeAbout;
      'home.contact': HomeContact;
      'home.cta': HomeCta;
      'home.hero': HomeHero;
      'home.home': HomeHome;
      'supervisor.activities-config': SupervisorActivitiesConfig;
      'supervisor.attendance-config': SupervisorAttendanceConfig;
      'supervisor.dashboard-config': SupervisorDashboardConfig;
      'supervisor.dpr-config': SupervisorDprConfig;
      'supervisor.expenses-config': SupervisorExpensesConfig;
      'supervisor.fuel-config': SupervisorFuelConfig;
      'supervisor.issues-config': SupervisorIssuesConfig;
      'supervisor.machinery-config': SupervisorMachineryConfig;
      'supervisor.main-supervisor': SupervisorMainSupervisor;
      'supervisor.material-requests-config': SupervisorMaterialRequestsConfig;
      'supervisor.notifications-config': SupervisorNotificationsConfig;
      'supervisor.profile-config': SupervisorProfileConfig;
      'supervisor.project-config': SupervisorProjectConfig;
      'supervisor.settings-config': SupervisorSettingsConfig;
      'supervisor.site-config': SupervisorSiteConfig;
      'supervisor.tasks-config': SupervisorTasksConfig;
      'supervisor.workforce-config': SupervisorWorkforceConfig;
      'worker.activities-config': WorkerActivitiesConfig;
      'worker.advance-config': WorkerAdvanceConfig;
      'worker.attendance-config': WorkerAttendanceConfig;
      'worker.dashboard-config': WorkerDashboardConfig;
      'worker.documents-config': WorkerDocumentsConfig;
      'worker.leave-config': WorkerLeaveConfig;
      'worker.main-worker': WorkerMainWorker;
      'worker.notifications-config': WorkerNotificationsConfig;
      'worker.payroll-config': WorkerPayrollConfig;
      'worker.payslip-config': WorkerPayslipConfig;
      'worker.profile-config': WorkerProfileConfig;
      'worker.project-config': WorkerProjectConfig;
      'worker.safety-config': WorkerSafetyConfig;
      'worker.settings-config': WorkerSettingsConfig;
      'worker.site-config': WorkerSiteConfig;
      'worker.support-config': WorkerSupportConfig;
      'worker.tasks-config': WorkerTasksConfig;
    }
  }
}
