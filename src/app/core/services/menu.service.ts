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
    { group: 'Dashboard', selected: false, active: true, items: [] },
    { group: 'Profile', selected: false, active: false, items: [] }
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

  toggleMenu(menu: MenuItem) {
    this.pagesMenu.update(menus => menus.map(m => m === menu ? { ...m, selected: !m.selected } : m));
  }

  private isActive(route: string | undefined): boolean {
    if (!route) return false;
    return this.router.isActive(this.router.createUrlTree([route]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}
