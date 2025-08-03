import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

/**
 * SignIn component for Amplify UI authentication.
 * Renders form for unauth, user info/signout for auth.
 * Cite: Amplify UI Angular Docs v6[](https://docs.amplify.aws/angular/build-a-backend/auth/auth-in-angular/), StackOverflow on Hub for redirects[](https://stackoverflow.com/questions/63214325/aws-amplify-hub-listen-for-auth-events), Medium on Tailwind integration[](https://medium.com/@jan.hesters/email-only-sign-up-with-aws-amplify-81a3d718a7f9).
 */
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit, OnDestroy {
  private router = inject(Router);
  private authenticator = inject(AuthenticatorService);
  isLoading = signal(true);
  private hubListener: (() => void) | undefined;

  async ngOnInit() {
    this.isLoading.set(true);
    try {
      const user = await getCurrentUser();
      console.log('Signed in user:', user);
      const session = await fetchAuthSession();
      console.log('Session:', session);
      this.router.navigate(['/main-layout']);
    } catch (error) {
      console.error('Not signed in:', error);
      this.hubListener = Hub.listen('auth', ({ payload }) => {
        if (payload.event === 'signedIn') {
          this.router.navigate(['/main-layout']);
        }
      });
    } finally {
      this.isLoading.set(false);
    }
  }

  ngOnDestroy() {
    if (this.hubListener) this.hubListener();
  }
}
