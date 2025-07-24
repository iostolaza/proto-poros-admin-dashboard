import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'adminDashboardDrive',
  access: (allow) => ({
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'public/*': [
      allow.guest.to(['read'])
    ]
  })
});
