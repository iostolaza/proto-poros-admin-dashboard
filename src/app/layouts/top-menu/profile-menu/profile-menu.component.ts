// src/app/layouts/top-menu/profile-menu/profile-menu.component.ts: Component for profile dropdown with animations and toggle logic
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { signOut } from 'aws-amplify/auth';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ]
})
export class ProfileMenuComponent {
  isOpen = false;

  profileMenu = [
    { title: 'Profile', route: '/profile' },
    { title: 'Settings', route: '/settings' },
    { title: 'Logout', action: 'logout' }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onMenuItemClick(item: { title: string, route?: string, action?: string }) {
    if (item.route) {
      this.router.navigate([item.route]);
    } else if (item.action === 'logout') {
      this.logout();
    }
    this.isOpen = false;
  }

  async logout() {
    try {
      await signOut();
      this.router.navigate(['/sign-in']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}
