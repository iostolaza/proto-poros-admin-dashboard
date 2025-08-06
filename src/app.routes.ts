
// src/app.routes.ts

// src/app.routes.ts
// Routes with lazy-loading for features under protected main-layout.
// Guards for auth/no-auth.
// References:
// - Angular docs: https://angular.dev/guide/routing/lazy-loading (v20.1.0, loadComponent)
// - StackOverflow: https://stackoverflow.com/questions/78945678/angular-standalone-lazy-routes-2025 (child routes)

import { Routes } from '@angular/router';
import { SignInComponent } from './app/features/auth/sign-in/sign-in.component';
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component';
import { authGuard, noAuthGuard } from './app/core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [noAuthGuard] },
  {
    path: 'main-layout',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
    
      { path: 'home', loadComponent: () => import('./app/features/home/home.component').then(m => m.Home) },
      { path: 'profile', loadComponent: () => import('./app/features/profile/profile.component').then(m => m.Profile) },
      { path: 'messages/incoming', loadComponent: () => import('./app/features/messages/messages.component').then(m => m.Messages) },
      { path: 'messages/outgoing', loadComponent: () => import('./app/features/messages/messages.component').then(m => m.Messages) },
      { path: 'contacts/new', loadComponent: () => import('./app/features/contacts/contacts.component').then(m => m.Contacts) },
      { path: 'contacts/favorites', loadComponent: () => import('./app/features/contacts/contacts.component').then(m => m.Contacts) },
      { path: 'contacts/online', loadComponent: () => import('./app/features/contacts/contacts.component').then(m => m.Contacts) },
      { path: 'timesheet/submitted', loadComponent: () => import('./app/features/timesheet/timesheet.component').then(m => m.Timesheet) },
      { path: 'timesheet/inprogress', loadComponent: () => import('./app/features/timesheet/timesheet.component').then(m => m.Timesheet) },
      { path: 'timesheet/approved', loadComponent: () => import('./app/features/timesheet/timesheet.component').then(m => m.Timesheet) },
      { path: 'calendar', loadComponent: () => import('./app/features/calendar/calendar.component').then(m => m.Calendar) },
      { path: 'analytics', loadComponent: () => import('./app/features/analytics/analytics.component').then(m => m.Analytics) },
      { path: 'schedule', loadComponent: () => import('./app/features/schedule/schedule.component').then(m => m.Schedule) },
      { path: 'settings', loadComponent: () => import('./app/features/settings/settings.component').then(m => m.Settings) },
      { path: 'logout', loadComponent: () => import('./app/features/auth/sign-in/sign-in.component').then(m => m.SignInComponent) }
    ]
  },
  { path: '**', redirectTo: 'sign-in' }
];

