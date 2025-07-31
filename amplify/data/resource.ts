import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  UserSettings: a.model({
    theme: a.string().default('light'),
    preferences: a.json(),
    profilePictureKey: a.string(),
    owner: a.string().authorization(allow => [allow.owner().to(['read'])])
  }).authorization(allow => [allow.owner()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool'
  }
});
