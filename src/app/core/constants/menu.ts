// Constant menu data for the application.
// Based on routes and icons from preloader.
// References:
// - Angular docs: https://angular.dev/guide/routing/lazy-loading (v20.1.0)
// - Kept full paths for isActive matching; aligned with user menu.
import { MenuItem } from '../models/menu.model';
export const Menu = {
  pages: [
    {
      group: 'Main',
      items: [
        { label: 'Home', icon: '/assets/icons/lucide/home.svg', route: '/main-layout/home' },
      ],
    },
    {
      group: 'Profile',
      items: [
        { label: 'Profile', icon: '/assets/icons/lucide/user.svg', route: '/main-layout/profile' },
      ],
    },
    {
      group: 'Messages',
      items: [
        {
          label: 'Messages',
          icon: '/assets/icons/lucide/mail.svg',
          route: null,
          children: [
            { label: 'Incoming', route: '/main-layout/messages/incoming' },
            { label: 'Outgoing', route: '/main-layout/messages/outgoing' },
          ],
        },
      ],
    },
    {
      group: 'Contacts',
      items: [
        {
          label: 'Contacts',
          icon: '/assets/icons/lucide/users.svg',
          route: null,
          children: [
            { label: 'New', route: '/main-layout/contacts/new' },
            { label: 'Favorites', route: '/main-layout/contacts/favorites' },
            { label: 'Online', route: '/main-layout/contacts/online' },
          ],
        },
      ],
    },
    {
      group: 'Timesheet',
      items: [
        {
          label: 'Timesheet',
          icon: '/assets/icons/lucide/clock.svg',
          route: null,
          children: [
            { label: 'Submitted', route: '/main-layout/timesheet/submitted' },
            { label: 'In Progress', route: '/main-layout/timesheet/inprogress' },
            { label: 'Approved', route: '/main-layout/timesheet/approved' },
          ],
        },
      ],
    },
    {
      group: 'Productivity',
      separator: true,
      items: [
        { label: 'Calendar', icon: '/assets/icons/lucide/calendar.svg', route: '/main-layout/calendar' },
        { label: 'Analytics', icon: '/assets/icons/lucide/bar-chart.svg', route: '/main-layout/analytics' },
        { label: 'Schedule', icon: '/assets/icons/lucide/calendar-days.svg', route: '/main-layout/schedule' },
      ],
    },
    {
      group: 'Account',
      items: [
        { label: 'Settings', icon: '/assets/icons/lucide/settings.svg', route: '/main-layout/settings' },
        { label: 'Logout', icon: '/assets/icons/lucide/log-out.svg', route: '/logout' },
      ],
    },
  ] as MenuItem[],
};
