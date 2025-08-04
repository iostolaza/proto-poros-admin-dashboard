// src/app.component.ts
import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';  // Import the module
import outputs from '../amplify_outputs.json';  // Auto-generated config

Amplify.configure(outputs);

/**
 * Root component with Authenticator for sign-in.
 * Modular and testable; inject AuthenticatorService for auth state.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AmplifyAuthenticatorModule],  // Add to imports for standalone
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public authenticator: AuthenticatorService) {}
}
