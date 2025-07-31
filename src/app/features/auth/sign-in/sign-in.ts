// src/app/features/auth/sign-in/sign-in.ts
import { Component, inject, OnInit } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit {
  private router = inject(Router);

  async ngOnInit() {
    try {
      const user = await getCurrentUser();
      console.log('Signed in user:', user);
      const session = await fetchAuthSession();
      console.log('Session (with tokens/TTL):', session);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log('Not signed in:', error);
    }
  }
}