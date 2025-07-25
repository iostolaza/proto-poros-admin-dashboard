import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { currentAuthenticatedUser } from 'aws-amplify/auth';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  try {
    await currentAuthenticatedUser();
    return true;
  } catch {
    router.navigate(['/auth']);
    return false;
  }
};
