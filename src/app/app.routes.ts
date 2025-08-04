import { Routes } from '@angular/router';
import { SignIn } from './features/auth/sign-in/sign-in';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignIn, canActivate: [noAuthGuard] },
  { path: 'main-layout', component: MainLayout, canActivate: [authGuard] },
  { path: '**', redirectTo: 'sign-in' }
];
