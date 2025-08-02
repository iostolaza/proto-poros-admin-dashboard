import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

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
  private hubListener!: () => void;

  async ngOnInit() {
    this.isLoading.set(true);
    try {
      const user = await getCurrentUser();
      console.log('Signed in user:', user);
      const session = await fetchAuthSession();
      console.log('Session:', session);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log('Not signed in:', error);
      // Listen for auth events with Hub
      this.hubListener = Hub.listen('auth', ({ payload }) => {
        if (payload.event === 'signedIn') {
          this.router.navigate(['/dashboard']);
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
