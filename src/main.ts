import './amplify-config';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import { Amplify } from 'aws-amplify';  

console.log('Amplify Config:', Amplify.getConfig()); 

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAngularSvgIcon(),
    provideAnimations()
  ]
}).catch(err => console.error(err));
