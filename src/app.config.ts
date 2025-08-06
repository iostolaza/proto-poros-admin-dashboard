/**
 * Application configuration matching lannodev setup.
 * Enables dynamic SVG loading with HttpClient.
 * References:
 * - Angular docs: https://angular.dev/api/common/http/provideHttpClient (v20.1.0)
 * - angular-svg-icon GitHub: https://github.com/czeckd/angular-svg-icon (v19.1.1, default loader)
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAngularSvgIcon() // Default dynamic with HttpLoader
  ]
};