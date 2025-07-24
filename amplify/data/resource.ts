import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  User: a.model({
    name: a.string(),
    role: a.enum(['admin', 'employee', 'manager']),
    bio: a.string(),
    tasks: a.json(),
    images: a.string().array(),
    alerts: a.json().array(),
  }).authorization(allow => [allow.owner()]),
  UserSettings: a.model({
    userId: a.id(),
    theme: a.string(),
    notifications: a.boolean(),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner()]),
  FinancialAccount: a.model({
    userId: a.id(),
    name: a.string(),
    balance: a.float(),
    number: a.string(),
    type: a.string(),
    currency: a.enum(['USD', 'EUR']),
    transactions: a.json().array(),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner()]),
  Analytic: a.model({
    metric: a.enum(['hours_submitted', 'transactions_processed', 'logins', 'revenue', 'alerts_sent']),
    value: a.integer(),
    timestamp: a.datetime(),
  }).authorization(allow => [allow.authenticated()]),
  Message: a.model({
    userId: a.id(),
    content: a.string(),
    timestamp: a.datetime(),
    recipientId: a.id(),
    attachments: a.string().array(),
  }).authorization(allow => [allow.owner(), allow.authenticated().to(['read'])]),
  Timesheet: a.model({
    userId: a.id(),
    date: a.date(),
    hours: a.float(),
    project: a.string(),
    client: a.string(),
    status: a.enum(['submitted', 'approved', 'rejected']),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner()]),
  Schedule: a.model({
    userId: a.id(),
    shiftStart: a.datetime(),
    shiftEnd: a.datetime(),
    availability: a.json(),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner()]),
  CalendarEvent: a.model({
    userId: a.id(),
    title: a.string(),
    start: a.datetime(),
    end: a.datetime(),
    reminder: a.boolean(),
    sharedWith: a.id().array(),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner(), allow.authenticated().to(['read'])]),
  Contact: a.model({
    userId: a.id(),
    name: a.string(),
    email: a.string(),
    messages: a.hasMany('Message', 'recipientId'),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: { defaultAuthorizationMode: 'userPool' }
});
