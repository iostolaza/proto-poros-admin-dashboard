/**
 * Application configuration for standalone Angular app.
 * Adds provideAnimationsAsync() to enable animations and resolve NG05105 for triggers like @openClose.
 * Cite: Angular Animations Guide[](https://angular.dev/guide/animations),
 *       provideAnimationsAsync API[](https://angular.dev/api/platform-browser/animations/async/provideAnimationsAsync),
 *       StackOverflow on Standalone Animations[](https://stackoverflow.com/questions/75403140/how-to-use-animations-in-an-angular-standalone-component).
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync() // Enables async-loaded animations to fix NG05105
  ]
};
