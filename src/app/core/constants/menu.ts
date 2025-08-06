// src/app/core/constants/menu.ts
// Updated paths to Heroicons outline SVGs matching lannodev.
 // References:
 // - Heroicons: https://heroicons.com/ (v2.1.5)
 // - lannodev repo: https://github.com/lannodev/angular-tailwind/blob/main/src/app/core/constants/menu.ts (example structure)

// Updated with user-provided menu; Lucide icons.
// References:
// - Lucide: https://lucide.dev/icons (v1.3.0)
// - lannodev repo: https://github.com/lannodev/angular-tailwind/blob/main/src/app/core/constants/menu.ts (structure)

import { MenuItem } from '../models/menu.model';

export const Menu = {
  pages: [
    {
      group: 'Main',
      separator: false,
      items: [
        { icon: '/assets/icons/lucide/home.svg', label: 'Home', route: '/home' },
        { icon: '/assets/icons/lucide/user.svg', label: 'Profile', route: '/profile' },
        {
          icon: '/assets/icons/lucide/mail.svg',
          label: 'Messages',
          children: [
            { icon: '/assets/icons/lucide/inbox.svg', label: 'Incoming', route: '/messages/incoming' },
            { icon: '/assets/icons/lucide/send.svg', label: 'Outgoing', route: '/messages/outgoing' }
          ]
        },
        {
          icon: '/assets/icons/lucide/users.svg',
          label: 'Contacts',
          children: [
            { icon: '/assets/icons/lucide/user-plus.svg', label: 'New', route: '/contacts/new' },
            { icon: '/assets/icons/lucide/star.svg', label: 'Favorites', route: '/contacts/favorites' },
            { icon: '/assets/icons/lucide/activity.svg', label: 'Online', route: '/contacts/online' }
          ]
        }
      ]
    },
    {
      group: 'Productivity',
      separator: true,
      items: [
        {
          icon: '/assets/icons/lucide/clock.svg',
          label: 'Timesheet',
          children: [
            { icon: '/assets/icons/lucide/file-check.svg', label: 'Submitted', route: '/timesheet/submitted' },
            { icon: '/assets/icons/lucide/loader.svg', label: 'In Progress', route: '/timesheet/inprogress' },
            { icon: '/assets/icons/lucide/check.svg', label: 'Approved', route: '/timesheet/approved' }
          ]
        },
        { icon: '/assets/icons/lucide/calendar.svg', label: 'Calendar', route: '/calendar' },
        { icon: '/assets/icons/lucide/bar-chart.svg', label: 'Analytics', route: '/analytics' },
        { icon: '/assets/icons/lucide/calendar-days.svg', label: 'Schedule', route: '/schedule' }
      ]
    },
    {
      group: 'Account',
      separator: true,
      items: [
        { icon: '/assets/icons/lucide/settings.svg', label: 'Settings', route: '/settings' },
        { icon: '/assets/icons/lucide/log-out.svg', label: 'Logout', route: '/logout' }
      ]
    }
  ] as MenuItem[]
};