import { referenceAuth } from '@aws-amplify/backend';
import { data } from '../data/resource';  // Import data for modular access grants

/**
 * Reference your existing Cognito auth resources
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth/use-existing-cognito-resources/
 */
export const auth = referenceAuth({
  userPoolId: process.env.USER_POOL_ID || 'us-west-1_t6heXEI90',  // Existing User Pool ID; use env for multi-env
  userPoolClientId: process.env.USER_POOL_CLIENT_ID || '3i1trv18gcoinlut61i79vcrjs',  // App Client ID
  identityPoolId: process.env.IDENTITY_POOL_ID || 'us-west-1:b07617d8-b87a-4563-b210-43b442d5e355',  // Identity Pool ID
  authRoleArn: process.env.AUTH_ROLE_ARN || 'arn:aws:iam::381491980392:role/service-role/protos-dashboard-login-users',  // Authenticated role ARN
  unauthRoleArn: process.env.UNAUTH_ROLE_ARN || 'arn:aws:iam::381491980392:role/service-role/protos-dashboard-login-users-unauth',  // Unauthenticated role ARN
  // Optional: Reference Cognito groups for RBAC (add custom roles if needed)
  // groups: {
  //   admin: 'arn:aws:iam::381491980392:role/custom-admin-role',  // Example for group-specific roles
  // },
  // Grant access to data (e.g., Todo model CRUD); manual IAM policies on roles required for enforcement
  access: (allow) => [
    allow.resource(data).to(['read', 'write'])  // Scalable: Add 'create', 'delete' as needed
  ]
});
