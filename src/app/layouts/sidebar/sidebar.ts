

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { LayoutService } from '../../core/services/layout.service';

// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   templateUrl: './sidebar.html',
//   styleUrl: './sidebar.scss'
// })
// export class Sidebar {
//   layout = inject(LayoutService);
// }

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AngularSvgIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  layout = inject(LayoutService);
  navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: 'assets/icons/dashboard.svg' },
    { path: '/messages', label: 'Messages', icon: 'assets/icons/messages.svg' },
    { path: '/profile', label: 'Profile', icon: 'assets/icons/profile.svg' },
    { path: '/settings', label: 'Settings', icon: 'assets/icons/settings.svg' },
    { path: '/analytics', label: 'Analytics', icon: 'assets/icons/analytics.svg' },
    { path: '/timesheet', label: 'Timesheet', icon: 'assets/icons/timesheet.svg' },
    { path: '/schedule', label: 'Schedule', icon: 'assets/icons/schedule.svg' },
    { path: '/calendar', label: 'Calendar', icon: 'assets/icons/calendar.svg' },
    { path: '/contacts', label: 'Contacts', icon: 'assets/icons/contacts.svg' },
  ];
}
