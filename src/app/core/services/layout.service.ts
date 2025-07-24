import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  sidebarCollapsed = signal<boolean>(localStorage.getItem('sidebarCollapsed') === 'true');
  theme = signal<string>(localStorage.getItem('theme') || 'light');

  toggleSidebar() {
    this.sidebarCollapsed.update(val => !val);
  }

  toggleTheme() {
    this.theme.update(val => val === 'light' ? 'dark' : 'light');
  }

  constructor() {
    effect(() => {
      localStorage.setItem('sidebarCollapsed', this.sidebarCollapsed().toString());
      localStorage.setItem('theme', this.theme());
      document.documentElement.classList.toggle('dark', this.theme() === 'dark');
    });
  }
}
