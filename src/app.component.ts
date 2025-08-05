
// src/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Empty root component; all content handled via routing
}

// Here we have removed the amplify setup, will be handled in main.ts
// We have removed the AuthenticatorService
// Removed the constructor, this will be handled routing
// Revert back if it breaks.




// import { Component } from '@angular/core';
// import { Amplify } from 'aws-amplify';
// import { AuthenticatorService } from '@aws-amplify/ui-angular';
// import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';  
// import outputs from '../amplify_outputs.json';

// Amplify.configure(outputs);

/**
 * Root component with Authenticator for sign-in.
 * Modular and testable; inject AuthenticatorService for auth state.
 */
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [AmplifyAuthenticatorModule], 
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   constructor(public authenticator: AuthenticatorService) {}
// }




