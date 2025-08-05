// src/app/core/constants/menu.ts
// Static menu configuration based on your navLinks.
// Adapted to support nesting (example: Calendar under Schedule).
// Add more groups/separators as needed.

import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Navigation',
      separator: false,
      items: [
        {
          icon: 'assets/icons/home.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        {
          icon: 'assets/icons/message-square.svg',
          label: 'Messages',
          route: '/messages',
        },
        {
          icon: 'assets/icons/user.svg',
          label: 'Profile',
          route: '/profile',
        },
        {
          icon: 'assets/icons/settings.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/bar-chart-2.svg',
          label: 'Analytics',
          route: '/analytics',
        },
        {
          icon: 'assets/icons/clock.svg',
          label: 'Timesheet',
          route: '/timesheet',
        },
        {
          icon: 'assets/icons/calendar.svg',
          label: 'Schedule',
          route: '/schedule',
          children: [
            {
              label: 'Calendar',
              route: '/calendar',
            },
          ],
        },
        {
          icon: 'assets/icons/users.svg',
          label: 'Contacts',
          route: '/contacts',
        },
      ],
    },
  ];
}
