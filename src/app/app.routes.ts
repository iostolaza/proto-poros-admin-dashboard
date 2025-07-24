import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './core/guards/auth.guards';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/sign-in/sign-in').then(m => m.SignIn),
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'messages',
        loadComponent: () => import('./features/messages/messages').then(m => m.Messages),
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile').then(m => m.Profile),
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings').then(m => m.Settings),
      },
      {
        path: 'analytics',
        loadComponent: () => import('./features/analytics/analytics').then(m => m.Analytics),
      },
      {
        path: 'timesheet',
        loadComponent: () => import('./features/timesheet/timesheet').then(m => m.Timesheet),
      },
      {
        path: 'schedule',
        loadComponent: () => import('./features/schedule/schedule').then(m => m.Schedule),
      },
      {
        path: 'calendar',
        loadComponent: () => import('./features/calendar/calendar').then(m => m.Calendar),
      },
      {
        path: 'contacts',
        loadComponent: () => import('./features/contacts/contacts').then(m => m.Contacts),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
