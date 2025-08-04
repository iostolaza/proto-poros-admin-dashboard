// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AmplifyAuthenticatorModule),
  ],
}).catch((err) => console.error(err));
