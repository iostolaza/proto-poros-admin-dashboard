import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './core/guards/auth.guards';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'auth', loadComponent: () => import('./features/auth/sign-in/sign-in').then(m => m.SignIn) },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard), canActivate: [authGuard] },
      { path: 'settings', loadComponent: () => import('./features/settings/settings').then(m => m.Settings) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
