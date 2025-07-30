import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export interface MenuItem {
  group: string;
  selected: boolean;
  active: boolean;
  items: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  icon?: string;
  route: string;
  children?: SubMenuItem[];
  active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  showMobileMenu = signal(false);
  pagesMenu = signal<MenuItem[]>([
    { group: 'Dashboard', selected: false, active: true, items: [{ label: 'Dashboard', icon: 'assets/icons/home.svg', route: '/dashboard' }] },
    { group: 'Profile', selected: false, active: false, items: [{ label: 'Profile', icon: 'assets/icons/user.svg', route: '/profile' }] }
  ]);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pagesMenu().forEach(menu => {
          let activeGroup = false;
          menu.items.forEach(subMenu => {
            const active = this.isActive(subMenu.route);
            subMenu.active = active;
            if (active) activeGroup = true;
          });
          menu.active = activeGroup;
        });
      }
    });
  }

  toggleMobileMenu() {
    this.showMobileMenu.update(v => !v);
  }

  toggleMenu(menu: MenuItem) {
    this.pagesMenu.update(menus => menus.map(m => m === menu ? { ...m, selected: !m.selected } : m));
  }

  toggleSidebar() {
    // Placeholder for sidebar toggle logic
    console.log('Sidebar toggled');
  }

  expand(items: SubMenuItem[]) {
    // Placeholder for expanding menu items
    items.forEach(item => {
      item.active = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }

  toggleSubMenu(submenu: SubMenuItem) {
    // Placeholder for submenu toggle logic
    if (submenu) {
      submenu.active = !submenu.active;
    }
  }

  private isActive(route: string): boolean {
    return this.router.isActive(this.router.createUrlTree([route]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}
