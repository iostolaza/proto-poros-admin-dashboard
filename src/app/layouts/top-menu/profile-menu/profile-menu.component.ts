// src/app/layouts/top-menu/profile-menu/profile-menu.component.ts: Component for profile dropdown with animations and toggle logic
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';  // Updated to use enter/leave for better hide/show
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to imports for structural directives like *ngIf
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
    { title: 'Profile' },
    { title: 'Settings' },
    { title: 'Logout' }
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onMenuItemClick(item: { title: string }) {
    console.log('Clicked:', item.title);
    // Add logic for each item, e.g., navigation or sign out
    this.isOpen = false;
  }
}
