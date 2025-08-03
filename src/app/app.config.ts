/*
Developer: Francisco Ostolaza
Date Created: August 04, 2025
Date Updated: August 04, 2025
Description: Application-wide configuration for standalone Angular app. Provides router, HTTP client, animations, SVG icons, and now ng-idle providers for idle detection. Uses importProvidersFrom for module-based services in standalone mode.
Cite: Angular Standalone Guide[](https://angular.dev/guide/standalone-components), @ng-idle/core npm[](https://www.npmjs.com/package/@ng-idle/core), Medium on ng-idle setup[](https://medium.com/ngconf/detecting-idle-users-in-your-angular-app-c55ba09a1291), StackOverflow on no provider error[](https://stackoverflow.com/questions/40612459/uncaught-in-promise-no-provider-for-idle).
*/

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // Bundles core + keepalive

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAngularSvgIcon(),
    importProvidersFrom(NgIdleKeepaliveModule.forRoot()) // Provides Idle, Keepalive for standalone
  ]
};
