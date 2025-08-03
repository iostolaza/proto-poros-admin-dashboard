import { referenceAuth } from '@aws-amplify/backend';

/**
 * Reference your existing Cognito auth resources
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth/use-existing-cognito-resources/
 */
export const auth = referenceAuth({
  userPoolId: process.env.USER_POOL_ID || 'us-west-1_SfAsdQTeS',  // New User Pool ID without aliases
  userPoolClientId: process.env.USER_POOL_CLIENT_ID || '10o1ka4ms3ifh2pniugt7q9f42',  // New App Client ID
  identityPoolId: process.env.IDENTITY_POOL_ID || 'us-west-1:b07617d8-b87a-4563-b210-43b442d5e355',  // Existing Identity Pool ID
  authRoleArn: process.env.AUTH_ROLE_ARN || 'arn:aws:iam::381491980392:role/service-role/protos-dashboard-login-users',  // Authenticated role ARN
  unauthRoleArn: process.env.UNAUTH_ROLE_ARN || 'arn:aws:iam::381491980392:role/service-role/protos-dashboard-login-users-unauth',  // Unauthenticated role ARN
  // Optional: Reference Cognito groups for RBAC (add custom roles if needed)
  // groups: {
  //   admin: 'arn:aws:iam::381491980392:role/custom-admin-role',  // Example for group-specific roles
  // },
  // Note: Access grants not supported for referenced auth; for data (identityPool mode), manually add IAM policies to roles for AppSync/DynamoDB access.
  // Example actions: appsync:GraphQL, dynamodb:PutItem/GetItem, etc.
});
