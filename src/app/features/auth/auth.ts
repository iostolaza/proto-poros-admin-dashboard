import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {}