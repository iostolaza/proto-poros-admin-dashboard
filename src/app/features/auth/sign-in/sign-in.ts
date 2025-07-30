import { Component, inject, OnInit } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit {
  private router = inject(Router);

  ngOnInit() {
    import('aws-amplify/auth').then(({ getCurrentUser }) => {
      getCurrentUser().then(() => this.router.navigate(['/dashboard'])).catch(() => {});
    });
  }
}
