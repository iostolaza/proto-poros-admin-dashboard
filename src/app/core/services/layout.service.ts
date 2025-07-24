// import { Injectable, signal, effect } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class LayoutService {
//   sidebarCollapsed = signal<boolean>(localStorage.getItem('sidebarCollapsed') === 'true');
//   theme = signal<string>(localStorage.getItem('theme') || 'light');

//   toggleSidebar() {
//     this.sidebarCollapsed.update(val => !val);
//   }

//   toggleTheme() {
//     this.theme.update(val => val === 'light' ? 'dark' : 'light');
//   }

//   constructor() {
//     effect(() => {
//       localStorage.setItem('sidebarCollapsed', this.sidebarCollapsed().toString());
//       localStorage.setItem('theme', this.theme());
//       document.documentElement.classList.toggle('dark', this.theme() === 'dark');
//     });
//   }
// }

import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  sidebarCollapsed = signal(false);
  isDarkMode = signal(false);

  constructor() {
    // Detect system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode.set(prefersDark);

    // Apply dark class to <html>
    effect(() => {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleSidebar() {
    this.sidebarCollapsed.update(value => !value);
  }

  toggleDarkMode() {
    this.isDarkMode.update(value => !value);
  }
}
