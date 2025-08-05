
// src/app.routes.ts

import { Routes } from '@angular/router';
import { SignInComponent } from './app/features/auth/sign-in/sign-in.component';
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component'; 
import { authGuard, noAuthGuard } from './app/core/guards/auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component:  SignInComponent, canActivate: [noAuthGuard] },
  { path: 'main-layout', component: MainLayoutComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'sign-in' }
];

// import { Routes } from '@angular/router';
// import { SignIn } from './features/auth/sign-in/sign-in';
// import { MainLayout } from './layouts/main-layout/main-layout';
// import { authGuard, noAuthGuard } from './core/guards/auth.guard';

// export const routes: Routes = [
//   { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
//   { path: 'sign-in', component: SignIn, canActivate: [noAuthGuard] },
//   { path: 'main-layout', component: MainLayout, canActivate: [authGuard] },
//   { path: '**', redirectTo: 'sign-in' }
// ];
