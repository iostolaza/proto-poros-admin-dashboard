// amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

/**
 * Define the auth resource with email login.
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Verify your email for our app',  
    },
  },
});
