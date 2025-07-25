import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplify_outputs.json';

Amplify.configure(amplifyconfig);

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
