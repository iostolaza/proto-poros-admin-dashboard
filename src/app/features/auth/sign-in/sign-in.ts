import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit {
  private router = inject(Router);
  isLoading = signal(true);

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
    } finally {
      this.isLoading.set(false);
    }
  }
}
