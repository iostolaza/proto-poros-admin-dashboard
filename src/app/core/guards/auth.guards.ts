
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getCurrentUser } from 'aws-amplify/auth';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  try {
    await getCurrentUser();
    return true;
  } catch {
    router.navigate(['/auth']);
    return false;
  }
};