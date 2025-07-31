import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrentUser } from 'aws-amplify/auth';

export const authGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  try {
    await getCurrentUser();
    return true; 
  } catch (error) {
    console.error('Auth guard error:', error); 
    return router.createUrlTree(['/auth']);
  }
};

export const noAuthGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  try {
    await getCurrentUser();
    return router.createUrlTree(['/dashboard']);
  } catch (error) {
    console.error('NoAuth guard error:', error);
    return true;
  }
};
