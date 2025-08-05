import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { signOut } from 'aws-amplify/auth';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: '1 !important', transform: 'translateY(0)', visibility: 'visible' })),
      state('closed', style({ opacity: 0, transform: 'translateY(-20px)', visibility: 'hidden' })),
      transition('open => closed', animate('0.2s')),
      transition('closed => open', animate('0.2s')),
    ]),
  ],
})
export class ProfileMenu {
  isOpen = signal(false);
  profileMenu = [
    { title: 'Your Profile', icon: 'assets/icons/user.svg', link: '/profile' },
    { title: 'Settings', icon: 'assets/icons/settings.svg', link: '/settings' },
    { title: 'Log out', icon: 'assets/icons/log-out.svg', link: null }, 
  ];

  constructor(private router: Router) {
    effect(() => console.log('isOpen changed:', this.isOpen()));
  }

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  async onMenuItemClick(item: { title: string; link: string | null }) {
    if (item.title === 'Log out') {
      await signOut({ global: true }); 
      this.router.navigate(['/auth']).then(() => window.location.reload()); 
    } else if (item.link) {
      this.router.navigate([item.link]);
    }
    this.isOpen.set(false);
  }
}
