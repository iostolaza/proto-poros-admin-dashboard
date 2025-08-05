// src/app.routes.ts: Updated .then for home to m.Home
import { Routes } from '@angular/router';
import { SignInComponent } from './app/features/auth/sign-in/sign-in.component'; // Direct import as preferred
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component'; // Direct import as preferred
import { authGuard, noAuthGuard } from './app/core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [noAuthGuard] },
  { path: 'main-layout', component: MainLayoutComponent, canActivate: [authGuard], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./app/features/home/home.component').then(m => m.Home) },
    { path: 'analytics', loadComponent: () => import('./app/features/analytics/analytics.component').then(m => m.Analytics) },
    { path: 'calendar', loadComponent: () => import('./app/features/calendar/calendar.component').then(m => m.Calendar) },
    { path: 'contacts', loadComponent: () => import('./app/features/contacts/contacts.component').then(m => m.Contacts) },
    { path: 'messages', loadComponent: () => import('./app/features/messages/messages.component').then(m => m.Messages) },
    { path: 'profile', loadComponent: () => import('./app/features/profile/profile.component').then(m => m.Profile) },
    { path: 'schedule', loadComponent: () => import('./app/features/schedule/schedule.component').then(m => m.Schedule) },
    { path: 'settings', loadComponent: () => import('./app/features/settings/settings.component').then(m => m.Settings) },
    { path: 'timesheet', loadComponent: () => import('./app/features/timesheet/timesheet.component').then(m => m.Timesheet) },
  ]},
  { path: '**', redirectTo: 'sign-in' }
];
