import { Component, inject } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import type { SignInOutput } from 'aws-amplify/auth';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './sign-in.html'
})
export class SignIn {
  private router = inject(Router);
  services = {
    handleSignIn: async (input: any): Promise<SignInOutput> => {
      await this.router.navigate(['/dashboard']);
      return { isSignedIn: true, nextStep: { signInStep: 'DONE' } };
    }
  };
}
