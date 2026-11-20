import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    adminPermissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::permission'
    >;
    adminUserOwner: Schema.Attribute.Relation<'manyToOne', 'admin::user'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    kind: Schema.Attribute.Enumeration<['content-api', 'admin']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'content-api'>;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminAuditLog extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_audit_logs';
  info: {
    displayName: 'Audit Log';
    pluralName: 'audit-logs';
    singularName: 'audit-log';
  };
  options: {
    draftAndPublish: false;
    timestamps: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::audit-log'> &
      Schema.Attribute.Private;
    payload: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Relation<'oneToOne', 'admin::user'>;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    apiToken: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    metadata: Schema.Attribute.JSON & Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    apiTokens: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordTokenExpiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAdminConfigAdminConfig extends Struct.SingleTypeSchema {
  collectionName: 'admin_configs';
  info: {
    description: 'Global Admin Master Configuration holding the Main Admin component';
    displayName: 'Admin Configuration';
    pluralName: 'admin-configs';
    singularName: 'admin-config';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::admin-config.admin-config'
    > &
      Schema.Attribute.Private;
    mainAdmin: Schema.Attribute.Component<'admin.main-admin', false>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STRUCTIVA Master Admin Configuration'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiApprovalApproval extends Struct.CollectionTypeSchema {
  collectionName: 'approvals';
  info: {
    description: 'Centralized multi-module operational approval and rejection pipeline';
    displayName: 'Approval Workflow';
    pluralName: 'approvals';
    singularName: 'approval';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::approval.approval'
    > &
      Schema.Attribute.Private;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    relatedCollection: Schema.Attribute.String;
    relatedEntityId: Schema.Attribute.String;
    remarks: Schema.Attribute.Text;
    requestedBy: Schema.Attribute.String & Schema.Attribute.Required;
    requestedDate: Schema.Attribute.Date;
    reviewedBy: Schema.Attribute.String;
    reviewedDate: Schema.Attribute.Date;
    site: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['Pending', 'Approved', 'Rejected', 'Under Review']
    > &
      Schema.Attribute.DefaultTo<'Pending'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      [
        'Worker Onboarding',
        'Site Expense',
        'Material Indent',
        'Attendance Mismatch',
        'Fuel Log',
        'Leave Application',
        'Equipment Requisition',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAttendanceAttendance extends Struct.CollectionTypeSchema {
  collectionName: 'attendances';
  info: {
    description: 'Daily worker attendance, GPS geofence verification and check-in logs';
    displayName: 'Attendance';
    pluralName: 'attendances';
    singularName: 'attendance';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    approvalStatus: Schema.Attribute.Enumeration<
      [
        'Auto-Verified',
        'Pending Exception Review',
        'Approved by Supervisor',
        'Rejected',
      ]
    > &
      Schema.Attribute.DefaultTo<'Auto-Verified'>;
    checkInTime: Schema.Attribute.String;
    checkOutTime: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    distanceFromSiteMetres: Schema.Attribute.Decimal;
    exceptionReason: Schema.Attribute.String;
    geofencePassed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    gpsAccuracyMetres: Schema.Attribute.Decimal;
    hoursWorked: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<8>;
    isException: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    latitude: Schema.Attribute.Decimal;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::attendance.attendance'
    > &
      Schema.Attribute.Private;
    longitude: Schema.Attribute.Decimal;
    publishedAt: Schema.Attribute.DateTime;
    qrVerified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    site: Schema.Attribute.String & Schema.Attribute.Required;
    status: Schema.Attribute.Enumeration<
      ['Present', 'Half Day', 'Overtime', 'Absent']
    > &
      Schema.Attribute.DefaultTo<'Present'>;
    supervisorRemark: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verificationMethod: Schema.Attribute.Enumeration<
      ['GPS + Geofence', 'QR Code', 'Supervisor Manual Overrule']
    > &
      Schema.Attribute.DefaultTo<'GPS + Geofence'>;
    wageEarned: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    workerCode: Schema.Attribute.String & Schema.Attribute.Required;
    workerId: Schema.Attribute.String & Schema.Attribute.Required;
    workerName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiClientClient extends Struct.CollectionTypeSchema {
  collectionName: 'clients';
  info: {
    description: 'Verified infrastructure and EPC partners';
    displayName: 'Corporate Client';
    pluralName: 'clients';
    singularName: 'client';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::client.client'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    sector: Schema.Attribute.Enumeration<
      [
        'Solar EPC',
        'Water Infrastructure',
        'Industrial & EPC',
        'Commercial Infrastructure',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactEnquiryContactEnquiry
  extends Struct.CollectionTypeSchema {
  collectionName: 'contact_enquiries';
  info: {
    description: 'Public website project inquiries and contact submittals';
    displayName: 'Contact Enquiry';
    pluralName: 'contact-enquiries';
    singularName: 'contact-enquiry';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    companyName: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    estimatedScope: Schema.Attribute.String;
    fullName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-enquiry.contact-enquiry'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    message: Schema.Attribute.Text & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    projectSector: Schema.Attribute.Enumeration<
      [
        'Water Pipeline Infrastructure',
        'Solar Infrastructure',
        'Water Storage Tanks',
        'Heavy Fabrication',
        'General EPC / Industrial',
        'Other',
      ]
    > &
      Schema.Attribute.DefaultTo<'Water Pipeline Infrastructure'>;
    publishedAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['New', 'In Review', 'Contacted', 'Proposal Sent', 'Archived']
    > &
      Schema.Attribute.DefaultTo<'New'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDailyReportDailyReport extends Struct.CollectionTypeSchema {
  collectionName: 'daily_reports';
  info: {
    description: 'Daily site shift log including workforce count, machinery deployed, work executed, and diesel consumed';
    displayName: 'Daily Progress Report (DPR)';
    pluralName: 'daily-reports';
    singularName: 'daily-report';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    approvalStatus: Schema.Attribute.Enumeration<
      ['Approved', 'Under Review', 'Draft', 'Rejected']
    > &
      Schema.Attribute.DefaultTo<'Under Review'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dieselConsumedLitres: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    labourCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::daily-report.daily-report'
    > &
      Schema.Attribute.Private;
    machineryCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    remarks: Schema.Attribute.Text;
    reportDate: Schema.Attribute.Date & Schema.Attribute.Required;
    shift: Schema.Attribute.Enumeration<['Shift-1 (Day)', 'Shift-2 (Night)']> &
      Schema.Attribute.DefaultTo<'Shift-1 (Day)'>;
    site: Schema.Attribute.String;
    submittedBy: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workExecuted: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ApiExpenseExpense extends Struct.CollectionTypeSchema {
  collectionName: 'expenses';
  info: {
    description: 'Daily site expenditure, petty cash, invoices and contractor payments';
    displayName: 'Site Expense';
    pluralName: 'expenses';
    singularName: 'expense';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amount: Schema.Attribute.Decimal & Schema.Attribute.Required;
    category: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    expenseId: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::expense.expense'
    > &
      Schema.Attribute.Private;
    paidTo: Schema.Attribute.String;
    paymentMode: Schema.Attribute.String;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    receiptUrl: Schema.Attribute.String;
    remarks: Schema.Attribute.Text;
    status: Schema.Attribute.Enumeration<
      ['Approved', 'Pending Review', 'Rejected']
    > &
      Schema.Attribute.DefaultTo<'Approved'>;
    submittedBy: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFleetFleet extends Struct.CollectionTypeSchema {
  collectionName: 'fleets';
  info: {
    description: 'Heavy machinery, construction vehicles, telematics and telemetry assets';
    displayName: 'Fleet & Machinery';
    pluralName: 'fleets';
    singularName: 'fleet';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    assetClass: Schema.Attribute.Enumeration<
      ['Heavy Machinery', 'Commercial Vehicle']
    > &
      Schema.Attribute.DefaultTo<'Heavy Machinery'>;
    assetId: Schema.Attribute.String;
    assignedOperator: Schema.Attribute.String;
    assignmentHistory: Schema.Attribute.JSON;
    averageConsumption: Schema.Attribute.String;
    category: Schema.Attribute.String;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currentBookValue: Schema.Attribute.Decimal;
    currentProject: Schema.Attribute.String;
    currentStatus: Schema.Attribute.Enumeration<
      [
        'Operational (On Site)',
        'Under Maintenance',
        'Standby (Yard)',
        'Breakdown Alert',
      ]
    > &
      Schema.Attribute.DefaultTo<'Operational (On Site)'>;
    dailyInspections: Schema.Attribute.JSON;
    depreciationMethod: Schema.Attribute.String;
    documents: Schema.Attribute.JSON;
    engineNumber: Schema.Attribute.String;
    fitnessExpiry: Schema.Attribute.String;
    fuelLogs: Schema.Attribute.JSON;
    fuelTankCapacityLitres: Schema.Attribute.Decimal;
    fuelType: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Diesel (High Cetane)'>;
    image: Schema.Attribute.String;
    insuranceExpiry: Schema.Attribute.String;
    lastKnownCoordinates: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::fleet.fleet'> &
      Schema.Attribute.Private;
    maintenanceRecords: Schema.Attribute.JSON;
    manufacturer: Schema.Attribute.String;
    manufacturingYear: Schema.Attribute.Integer;
    meterUnit: Schema.Attribute.Enumeration<['Hours', 'Kilometres']> &
      Schema.Attribute.DefaultTo<'Hours'>;
    model: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    operatingCapacity: Schema.Attribute.String;
    operatingHoursOrKm: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    operatorLicence: Schema.Attribute.String;
    operatorPhone: Schema.Attribute.String;
    ownershipType: Schema.Attribute.Enumeration<
      ['Company Owned', 'Rented / Hired']
    > &
      Schema.Attribute.DefaultTo<'Company Owned'>;
    publishedAt: Schema.Attribute.DateTime;
    pucExpiry: Schema.Attribute.String;
    purchaseCost: Schema.Attribute.Decimal;
    purchaseDate: Schema.Attribute.String;
    registrationNumber: Schema.Attribute.String;
    rentalRatePerDay: Schema.Attribute.Decimal;
    rentalVendor: Schema.Attribute.String;
    serialNumber: Schema.Attribute.String;
    serviceDueAtHoursOrKm: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    telematicsImei: Schema.Attribute.String;
    telematicsStatus: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'GPS Connected'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFuelFuel extends Struct.CollectionTypeSchema {
  collectionName: 'fuels';
  info: {
    description: 'Fuel allocation, diesel issuance, bowser pump telemetry and theft detection logs';
    displayName: 'Fuel Log';
    pluralName: 'fuels';
    singularName: 'fuel';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    assetCode: Schema.Attribute.String & Schema.Attribute.Required;
    assetId: Schema.Attribute.String;
    assetName: Schema.Attribute.String & Schema.Attribute.Required;
    burnRatePerHour: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    fuelPumpOrBowser: Schema.Attribute.String;
    isTheftAnomaly: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    litresDisbursed: Schema.Attribute.Decimal & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::fuel.fuel'> &
      Schema.Attribute.Private;
    logId: Schema.Attribute.String;
    meterReading: Schema.Attribute.String;
    notes: Schema.Attribute.Text;
    operatorName: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    ratePerLitre: Schema.Attribute.Decimal & Schema.Attribute.Required;
    receiptInvoiceNo: Schema.Attribute.String;
    runHoursLogged: Schema.Attribute.Decimal;
    supervisorName: Schema.Attribute.String;
    theftVarianceLitres: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    totalCost: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepages';
  info: {
    description: 'Corporate homepage editorial and hero management';
    displayName: 'Homepage Content';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutTagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Quality Work Is Our Backbone.'>;
    aboutTitle: Schema.Attribute.String;
    contactEmail: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'corporate@structiva.internal'>;
    contactPhone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 (020) 4123 8800'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Let's discuss your project requirements and explore how STRUCTIVA can support your execution goals.">;
    ctaHeadline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Have an Infrastructure Project in Mind?'>;
    heroCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore Our Services'>;
    heroHeadline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Engineering with Precision. Execution with Responsibility.'>;
    heroSecondaryCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Discuss Your Project'>;
    heroSubheadline: Schema.Attribute.Text & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    > &
      Schema.Attribute.Private;
    officeAddress: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'STRUCTIVA Towers, Plot 42, Kharadi Central Boulevard, Pune, Maharashtra 411014'>;
    publishedAt: Schema.Attribute.DateTime;
    statExperienceYears: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'18+'>;
    statMachineryUnits: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'85+'>;
    statProjectsCompleted: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'250+'>;
    statWorkforceStrength: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'1,200+'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIssueIncidentIssueIncident
  extends Struct.CollectionTypeSchema {
  collectionName: 'issue_incidents';
  info: {
    description: 'Safety incidents, equipment breakdowns, material defects, and quality snags';
    displayName: 'Issue & Incident';
    pluralName: 'issue-incidents';
    singularName: 'issue-incident';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    assignedTo: Schema.Attribute.String;
    category: Schema.Attribute.Enumeration<
      [
        'Safety Violation',
        'Equipment Breakdown',
        'Material Delay',
        'Quality Defect',
        'Weather Delay',
        'Other',
      ]
    > &
      Schema.Attribute.DefaultTo<'Equipment Breakdown'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::issue-incident.issue-incident'
    > &
      Schema.Attribute.Private;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    reportedBy: Schema.Attribute.String;
    reportedDate: Schema.Attribute.Date;
    resolution: Schema.Attribute.Text;
    severity: Schema.Attribute.Enumeration<
      ['Critical', 'High', 'Medium', 'Low']
    > &
      Schema.Attribute.DefaultTo<'Medium'>;
    site: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['Open', 'Investigating', 'Resolved', 'Closed']
    > &
      Schema.Attribute.DefaultTo<'Open'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMaterialProcurementMaterialProcurement
  extends Struct.CollectionTypeSchema {
  collectionName: 'material_procurements';
  info: {
    description: 'Site material indents, procurement orders, inventory requests and deliveries';
    displayName: 'Material Procurement';
    pluralName: 'material-procurements';
    singularName: 'material-procurement';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'Cement & Concrete',
        'Steel & Rebar',
        'Aggregates & Sand',
        'Pipes & Fittings',
        'Electrical & Cables',
        'Safety Gear & PPE',
        'Tools & Hardware',
      ]
    > &
      Schema.Attribute.DefaultTo<'Cement & Concrete'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deliveryStatus: Schema.Attribute.Enumeration<
      [
        'Not Dispatched',
        'In Transit',
        'Delivered at Site',
        'Partially Delivered',
      ]
    > &
      Schema.Attribute.DefaultTo<'Not Dispatched'>;
    estimatedCost: Schema.Attribute.Decimal;
    itemName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::material-procurement.material-procurement'
    > &
      Schema.Attribute.Private;
    notes: Schema.Attribute.Text;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    quantity: Schema.Attribute.Decimal & Schema.Attribute.Required;
    requestedBy: Schema.Attribute.String;
    requiredDate: Schema.Attribute.Date;
    site: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['Pending Approval', 'Approved', 'Ordered', 'Delivered', 'Rejected']
    > &
      Schema.Attribute.DefaultTo<'Pending Approval'>;
    supplier: Schema.Attribute.String;
    unit: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProjectProject extends Struct.CollectionTypeSchema {
  collectionName: 'projects';
  info: {
    description: 'Structiva Enterprise Construction Projects & Sites';
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    budget: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    category: Schema.Attribute.Enumeration<
      [
        'Commercial Building',
        'Highway Infrastructure',
        'Metro Rail transit',
        'Industrial Plant',
      ]
    > &
      Schema.Attribute.DefaultTo<'Commercial Building'>;
    client: Schema.Attribute.String & Schema.Attribute.Required;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dailyReports: Schema.Attribute.JSON;
    deployedMachinery: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    description: Schema.Attribute.Text;
    documents: Schema.Attribute.JSON;
    expectedCompletion: Schema.Attribute.String;
    gallery: Schema.Attribute.JSON;
    image: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    milestones: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    progress: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    projectManager: Schema.Attribute.String;
    projectSupervisor: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    spent: Schema.Attribute.BigInteger & Schema.Attribute.DefaultTo<'0'>;
    startDate: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['Active', 'Under Review', 'Completed']
    > &
      Schema.Attribute.DefaultTo<'Active'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServiceService extends Struct.CollectionTypeSchema {
  collectionName: 'services';
  info: {
    description: 'Primary business sectors and execution capabilities';
    displayName: 'Corporate Service';
    pluralName: 'services';
    singularName: 'service';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    features: Schema.Attribute.JSON;
    fullDescription: Schema.Attribute.Text;
    imageUrl: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::service.service'
    > &
      Schema.Attribute.Private;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    shortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteActivitySiteActivity
  extends Struct.CollectionTypeSchema {
  collectionName: 'site_activities';
  info: {
    description: 'Daily engineering task, work execution and site activity tracking';
    displayName: 'Site Activity';
    pluralName: 'site-activities';
    singularName: 'site-activity';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    assignedSupervisor: Schema.Attribute.String;
    category: Schema.Attribute.Enumeration<
      [
        'Earthwork',
        'Civil & Structural',
        'Piping & Jointing',
        'Electrical & Solar',
        'Heavy Fabrication',
        'Inspection & Testing',
      ]
    > &
      Schema.Attribute.DefaultTo<'Civil & Structural'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-activity.site-activity'
    > &
      Schema.Attribute.Private;
    machineryDeployed: Schema.Attribute.String;
    progress: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    site: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['In Progress', 'Completed', 'Delayed', 'Planned']
    > &
      Schema.Attribute.DefaultTo<'In Progress'>;
    targetDate: Schema.Attribute.Date;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workforceCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface ApiSitePageSitePage extends Struct.CollectionTypeSchema {
  collectionName: 'site_pages';
  info: {
    description: 'Enterprise dynamic website pages and page content builder';
    displayName: 'Site Page';
    pluralName: 'site-pages';
    singularName: 'site-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    homeContent: Schema.Attribute.Component<'home.home', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-page.site-page'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    pageBody: Schema.Attribute.Text;
    pageHeroSubtitle: Schema.Attribute.Text;
    pageHeroTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupervisorRequestSupervisorRequest
  extends Struct.CollectionTypeSchema {
  collectionName: 'supervisor_requests';
  info: {
    description: 'Unified indents, material requests, maintenance and site incidents';
    displayName: 'Supervisor Request';
    pluralName: 'supervisor-requests';
    singularName: 'supervisor-request';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    adminRemarks: Schema.Attribute.Text;
    category: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    details: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supervisor-request.supervisor-request'
    > &
      Schema.Attribute.Private;
    priority: Schema.Attribute.Enumeration<
      ['Critical', 'High', 'Standard', 'Low']
    > &
      Schema.Attribute.DefaultTo<'Standard'>;
    project: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    remarks: Schema.Attribute.Text;
    requestType: Schema.Attribute.Enumeration<
      [
        'Material Request',
        'Site Issue',
        'Maintenance',
        'Labour Requirement',
        'DPR',
      ]
    > &
      Schema.Attribute.Required;
    site: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      [
        'Draft',
        'Submitted',
        'Under Review',
        'Approved',
        'Rejected',
        'Resolved',
        'Revision Required',
      ]
    > &
      Schema.Attribute.DefaultTo<'Submitted'>;
    submittedBy: Schema.Attribute.String & Schema.Attribute.Required;
    submittedDate: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupervisorSiteSupervisorSite
  extends Struct.SingleTypeSchema {
  collectionName: 'supervisor_sites';
  info: {
    description: 'Central Single Type for Supervisor Module holding the Main Supervisor master component';
    displayName: 'Supervisor Site';
    pluralName: 'supervisor-sites';
    singularName: 'supervisor-site';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supervisor-site.supervisor-site'
    > &
      Schema.Attribute.Private;
    mainSupervisor: Schema.Attribute.Component<
      'supervisor.main-supervisor',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STRUCTIVA Supervisor Site Operations'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupervisorSupervisor extends Struct.CollectionTypeSchema {
  collectionName: 'supervisors';
  info: {
    description: 'Enterprise Chief Field Supervisor master employee record';
    displayName: 'Supervisor';
    pluralName: 'supervisors';
    singularName: 'supervisor';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accountStatus: Schema.Attribute.Enumeration<
      ['Active', 'Suspended', 'Pending Verification']
    > &
      Schema.Attribute.DefaultTo<'Active'>;
    assignedProject: Schema.Attribute.String;
    assignedSite: Schema.Attribute.String;
    avatar: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    department: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Civil & Structural Engineering'>;
    designation: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Site Operations Supervisor'>;
    employmentType: Schema.Attribute.Enumeration<
      [
        'Full-Time Corporate Staff',
        'Contractual Senior Staff',
        'Project Consultant',
      ]
    > &
      Schema.Attribute.DefaultTo<'Full-Time Corporate Staff'>;
    joiningDate: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supervisor.supervisor'
    > &
      Schema.Attribute.Private;
    monthlySalary: Schema.Attribute.Decimal;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    notes: Schema.Attribute.Text;
    officialEmail: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    reportingAuthority: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Er. Rajesh Kulkarni (Project Director)'>;
    securityClearance: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Level 2 Field Operations'>;
    supervisorId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    totalWorkersAssigned: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<12>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWorkerProfileCorrectionWorkerProfileCorrection
  extends Struct.CollectionTypeSchema {
  collectionName: 'worker_profile_corrections';
  info: {
    description: 'Worker personal details and profile photo correction requests for Admin approval';
    displayName: 'Worker Profile Correction';
    pluralName: 'worker-profile-corrections';
    singularName: 'worker-profile-correction';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    adminRemarks: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fieldLabel: Schema.Attribute.String;
    fieldName: Schema.Attribute.String & Schema.Attribute.Required;
    isPhotoChange: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::worker-profile-correction.worker-profile-correction'
    > &
      Schema.Attribute.Private;
    newPhotoUrl: Schema.Attribute.Text;
    newValue: Schema.Attribute.Text;
    oldPhotoUrl: Schema.Attribute.Text;
    oldValue: Schema.Attribute.Text;
    project: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    reason: Schema.Attribute.Text & Schema.Attribute.Required;
    reviewedBy: Schema.Attribute.String;
    reviewedDate: Schema.Attribute.String;
    site: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<['Pending', 'Approved', 'Rejected']> &
      Schema.Attribute.DefaultTo<'Pending'>;
    submittedDate: Schema.Attribute.String & Schema.Attribute.Required;
    supervisorName: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workerCode: Schema.Attribute.String & Schema.Attribute.Required;
    workerId: Schema.Attribute.String & Schema.Attribute.Required;
    workerName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiWorkerSiteWorkerSite extends Struct.SingleTypeSchema {
  collectionName: 'worker_sites';
  info: {
    description: 'Central Single Type for Worker Module holding the Main Worker master component';
    displayName: 'Worker Site';
    pluralName: 'worker-sites';
    singularName: 'worker-site';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::worker-site.worker-site'
    > &
      Schema.Attribute.Private;
    mainWorker: Schema.Attribute.Component<'worker.main-worker', false>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STRUCTIVA Worker Site Operations'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWorkerWorker extends Struct.CollectionTypeSchema {
  collectionName: 'workers';
  info: {
    description: 'Enterprise construction worker and tradesperson record';
    displayName: 'Worker';
    pluralName: 'workers';
    singularName: 'worker';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    aadhaarNumber: Schema.Attribute.String;
    accountNumberMasked: Schema.Attribute.String;
    additionalSkills: Schema.Attribute.JSON;
    address: Schema.Attribute.Text;
    advanceTakenThisMonth: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    assignedProject: Schema.Attribute.String;
    avatar: Schema.Attribute.String;
    bankName: Schema.Attribute.String;
    bloodGroup: Schema.Attribute.String;
    category: Schema.Attribute.Enumeration<
      ['Skilled', 'Semi-Skilled', 'Unskilled']
    > &
      Schema.Attribute.DefaultTo<'Skilled'>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dailyWage: Schema.Attribute.Decimal;
    dob: Schema.Attribute.String;
    documents: Schema.Attribute.JSON;
    emergencyContact: Schema.Attribute.String;
    emergencyRelation: Schema.Attribute.String;
    employmentType: Schema.Attribute.Enumeration<
      ['Direct Payroll', 'Subcontractor Crew', 'Daily Muster']
    > &
      Schema.Attribute.DefaultTo<'Direct Payroll'>;
    experienceYears: Schema.Attribute.Integer;
    gender: Schema.Attribute.Enumeration<['Male', 'Female', 'Other']> &
      Schema.Attribute.DefaultTo<'Male'>;
    hometown: Schema.Attribute.String;
    ifscCode: Schema.Attribute.String;
    inductionDate: Schema.Attribute.String;
    joiningDate: Schema.Attribute.String;
    leaves: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::worker.worker'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    overtimeHourlyRate: Schema.Attribute.Decimal;
    overtimeHoursThisMonth: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    panNumber: Schema.Attribute.String;
    paymentMode: Schema.Attribute.Enumeration<
      ['Bank Transfer', 'Direct Cash Voucher', 'UPI']
    > &
      Schema.Attribute.DefaultTo<'Bank Transfer'>;
    phone: Schema.Attribute.String;
    presentDaysThisMonth: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    projectHistory: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    recentActivities: Schema.Attribute.JSON;
    safetyCertified: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    skill: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<['Active', 'Inactive']> &
      Schema.Attribute.DefaultTo<'Active'>;
    supervisorName: Schema.Attribute.String;
    totalDaysWorked: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workerId: Schema.Attribute.String;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    failureReason: Schema.Attribute.Enumeration<
      ['missed_schedule', 'failed_before_upgrade']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releaseCondition: Schema.Attribute.Enumeration<
      ['all_or_nothing', 'allow_partial']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'all_or_nothing'>;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'partial', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    totalPublishedEntries: Schema.Attribute.Integer;
    totalSkippedEntries: Schema.Attribute.Integer;
    totalUnpublishedEntries: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    outcome: Schema.Attribute.Enumeration<
      [
        'published',
        'unpublished',
        'skipped_invalid',
        'skipped_not_approved',
        'skipped_error',
        'skipped_held',
        'skipped_missed',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    reason: Schema.Attribute.JSON;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::audit-log': AdminAuditLog;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::admin-config.admin-config': ApiAdminConfigAdminConfig;
      'api::approval.approval': ApiApprovalApproval;
      'api::attendance.attendance': ApiAttendanceAttendance;
      'api::client.client': ApiClientClient;
      'api::contact-enquiry.contact-enquiry': ApiContactEnquiryContactEnquiry;
      'api::daily-report.daily-report': ApiDailyReportDailyReport;
      'api::expense.expense': ApiExpenseExpense;
      'api::fleet.fleet': ApiFleetFleet;
      'api::fuel.fuel': ApiFuelFuel;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::issue-incident.issue-incident': ApiIssueIncidentIssueIncident;
      'api::material-procurement.material-procurement': ApiMaterialProcurementMaterialProcurement;
      'api::project.project': ApiProjectProject;
      'api::service.service': ApiServiceService;
      'api::site-activity.site-activity': ApiSiteActivitySiteActivity;
      'api::site-page.site-page': ApiSitePageSitePage;
      'api::supervisor-request.supervisor-request': ApiSupervisorRequestSupervisorRequest;
      'api::supervisor-site.supervisor-site': ApiSupervisorSiteSupervisorSite;
      'api::supervisor.supervisor': ApiSupervisorSupervisor;
      'api::worker-profile-correction.worker-profile-correction': ApiWorkerProfileCorrectionWorkerProfileCorrection;
      'api::worker-site.worker-site': ApiWorkerSiteWorkerSite;
      'api::worker.worker': ApiWorkerWorker;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
