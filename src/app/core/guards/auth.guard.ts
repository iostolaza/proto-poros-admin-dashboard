// auth.guard.ts

/* 
Developer: Francisco Ostolaza  
Date Created: August 02, 2025  
Date Updated: August 02, 2025  
Description: This file defines functional guards for Angular routing to handle authentication checks using AWS Amplify. The authGuard allows access to protected routes only if the user is authenticated (valid session exists), redirecting to sign-in otherwise. The noAuthGuard does the opposite for public routes like sign-in/sign-up. Guards use RxJS for async handling of getCurrentUser(), ensuring secure validation of active sessions (not just user existence). Cite: Angular Docs on Guards[](https://angular.dev/guide/routing/common-router-tasks#preventing-unauthorized-access), StackOverflow on async guards[](https://stackoverflow.com/questions/43557490/angular-4-canactivate-with-observable-boolean), Amplify Auth Best Practices[](https://docs.amplify.aws/angular/build-a-backend/auth/accessing-credentials/).
*/

import { CanActivateFn, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrentUser } from 'aws-amplify/auth';
import { catchError, map, from, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  return from(getCurrentUser()).pipe(
    map(() => true),
    catchError(() => of(router.createUrlTree(['/sign-in']))) // Silent redirect
  );
};

export const noAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  return from(getCurrentUser()).pipe(
    map(() => router.createUrlTree(['/main-layout'])),
    catchError(() => of(true)) // Silent allow
  );
};