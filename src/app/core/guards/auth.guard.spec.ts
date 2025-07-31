import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { authGuard, noAuthGuard } from './auth.guard';
import { getCurrentUser } from 'aws-amplify/auth';

describe('Auth Guards', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    router = TestBed.inject(Router);
    spyOn(router, 'createUrlTree').and.callFake((commands: any[]) => {
      const tree = new UrlTree();
      // Mock UrlTree for testing
      return tree;
    });
  });

  describe('authGuard', () => {
    it('should allow access if authenticated', async () => {
      spyOn(getCurrentUser as any, 'getCurrentUser').and.resolveTo({ userId: 'test' });
      const result = await authGuard();
      expect(result).toBe(true);
    });

    it('should redirect if not authenticated', async () => {
      spyOn(getCurrentUser as any, 'getCurrentUser').and.rejectWith('No user');
      const result = await authGuard();
      expect(router.createUrlTree).toHaveBeenCalledWith(['/auth']);
      expect(result instanceof UrlTree).toBe(true);
    });
  });

  describe('noAuthGuard', () => {
    it('should allow access if not authenticated', async () => {
      spyOn(getCurrentUser as any, 'getCurrentUser').and.rejectWith('No user');
      const result = await noAuthGuard();
      expect(result).toBe(true);
    });

    it('should redirect if authenticated', async () => {
      spyOn(getCurrentUser as any, 'getCurrentUser').and.resolveTo({ userId: 'test' });
      const result = await noAuthGuard();
      expect(router.createUrlTree).toHaveBeenCalledWith(['/dashboard']);
      expect(result instanceof UrlTree).toBe(true);
    });
  });
});
