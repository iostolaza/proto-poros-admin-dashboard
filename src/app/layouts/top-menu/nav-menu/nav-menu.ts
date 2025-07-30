import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  # Added for *ngIf
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService, MenuItem } from '../../../core/services/menu.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, AngularSvgIconModule],
  templateUrl: './nav-menu.html'
})
export class NavMenu {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  constructor(public menuService: MenuService) {}

  toggleMenu(menu: MenuItem) {
    this.menuService.toggleMenu(menu);
  }

  public mouseEnter(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    const element = target.querySelector('div.dropdown-content');
    if (element) {
      this.hideMenuClass.forEach(c => element.classList.remove(c));
      this.showMenuClass.forEach(c => element.classList.add(c));
    }
  }

  public mouseLeave(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    const element = target.querySelector('div.dropdown-content');
    if (element) {
      this.showMenuClass.forEach(c => element.classList.remove(c));
      this.hideMenuClass.forEach(c => element.classList.add(c));
    }
  }

  trackByGroup(index: number, item: MenuItem): string {
    return item.group;
  }

  trackByLabel(index: number, item: { label: string }): string {
    return item.label;
  }
}
