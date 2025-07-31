// src/app/core/guards/auth.guard.ts
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrentUser } from 'aws-amplify/auth';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  try {
    await getCurrentUser();
    return true; 
  } catch (error) {
    console.warn('Auth guard: User not authenticated, redirecting to /auth', error);
    return router.createUrlTree(['/auth']);
  }
};

export const noAuthGuard: CanActivateFn = async () => {
  const router = inject(Router);
  try {
    await getCurrentUser();
    console.warn('NoAuth guard: User authenticated, redirecting to /dashboard');
    return router.createUrlTree(['/dashboard']);
  } catch (error) {
    return true;
  }
};
