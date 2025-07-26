import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { signOut } from 'aws-amplify/auth';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, AngularSvgIconModule],
  templateUrl: './profile-menu.html',
  styleUrls: ['./profile-menu.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'translateY(0)', visibility: 'visible' })),
      state('closed', style({ opacity: 0, transform: 'translateY(-20px)', visibility: 'hidden' })),
      transition('open => closed', animate('0.2s')),
      transition('closed => open', animate('0.2s')),
    ]),
  ],
})
export class ProfileMenu {
  isOpen = signal(false);
  profileMenu = [
    {
      title: 'Your Profile',
      icon: 'assets/icons/user.svg',
      link: '/profile',
    },
    {
      title: 'Settings',
      icon: 'assets/icons/settings.svg',
      link: '/settings',
    },
    {
      title: 'Log out',
      icon: 'assets/icons/log-out.svg',
      link: '/auth',
    }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  async logout() {
    await signOut();
    this.router.navigate(['/auth']);
  }
}
