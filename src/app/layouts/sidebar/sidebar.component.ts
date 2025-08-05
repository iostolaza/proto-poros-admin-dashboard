import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  layout = inject(LayoutService);
  navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: 'assets/icons/home.svg' },
    { path: '/messages', label: 'Messages', icon: 'assets/icons/message-square.svg' },
    { path: '/profile', label: 'Profile', icon: 'assets/icons/user.svg' },
    { path: '/settings', label: 'Settings', icon: 'assets/icons/settings.svg' },
    { path: '/analytics', label: 'Analytics', icon: 'assets/icons/bar-chart-2.svg' },
    { path: '/timesheet', label: 'Timesheet', icon: 'assets/icons/clock.svg' },
    { path: '/schedule', label: 'Schedule', icon: 'assets/icons/calendar.svg' },
    { path: '/calendar', label: 'Calendar', icon: 'assets/icons/calendar.svg' },
    { path: '/contacts', label: 'Contacts', icon: 'assets/icons/users.svg' },
  ];
}
