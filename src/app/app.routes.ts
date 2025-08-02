// app.routes.ts

/* 
Developer: Francisco Ostolaza  
Date Created: August 02, 2025  
Date Updated: August 02, 2025  
Description: This file defines the application's routing configuration using Angular's Router module. It sets up paths for unauthenticated users (sign-in/sign-up, default redirect) and authenticated users (main-layout with profile as default child). Guards ensure secure access: noAuthGuard for public routes, authGuard for protected. Wildcard and root redirects prevent white pages. Cite: Angular Routing Guide[](https://angular.dev/guide/routing), Amplify Integration with Guards[](https://docs.amplify.aws/angular/build-a-backend/auth/auth-in-angular/).
*/

// Imports
import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';
import { SignIn } from './features/auth/sign-in/sign-in';

// Routes Definition
export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Default to sign-in for unauth/white page prevention
  { path: 'sign-in', component: SignIn, canActivate: [noAuthGuard] },
  { path: 'sign-up', component: SignIn, canActivate: [noAuthGuard] }, // Reuse SignIn for sign-up (Amplify UI handles)
  { 
    path: 'main-layout',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', loadComponent: () => import('./features/profile/profile').then(m => m.Profile) }, // Default to profile
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'messages', loadComponent: () => import('./features/messages/messages').then(m => m.Messages) },
      { path: 'profile', loadComponent: () => import('./features/profile/profile').then(m => m.Profile) },
      { path: 'settings', loadComponent: () => import('./features/settings/settings').then(m => m.Settings) },
      { path: 'analytics', loadComponent: () => import('./features/analytics/analytics').then(m => m.Analytics) },
      { path: 'timesheet', loadComponent: () => import('./features/timesheet/timesheet').then(m => m.Timesheet) },
      { path: 'schedule', loadComponent: () => import('./features/schedule/schedule').then(m => m.Schedule) },
      { path: 'calendar', loadComponent: () => import('./features/calendar/calendar').then(m => m.Calendar) },
      { path: 'contacts', loadComponent: () => import('./features/contacts/contacts').then(m => m.Contacts) },
    ]
  },
  { path: '**', redirectTo: 'sign-in' } // Catch-all redirect for invalid paths
];
