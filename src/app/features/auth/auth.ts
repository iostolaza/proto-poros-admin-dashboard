import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AmplifyAuthenticatorModule], 
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {}
