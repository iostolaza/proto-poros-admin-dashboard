
// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config'; // Merged providers including router and Amplify module
import { Amplify } from 'aws-amplify';
import amplifyConfig from '../amplify_outputs.json'; // Direct import from root JSON (Gen 2 preferred)

// Configure Amplify before bootstrap (Gen 2 best practice)
Amplify.configure(amplifyConfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));