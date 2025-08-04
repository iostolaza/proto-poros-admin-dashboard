// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';  // Modular import for auth

defineBackend({
  auth,
});
