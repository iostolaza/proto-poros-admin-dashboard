// Top-level menu, matching lannodev.
// Standalone, OnPush, calls service toggle.
// References:
// - lannodev repo: https://github.com/lannodev/angular-tailwind/blob/main/src/app/modules/layout/components/sidebar/sidebar-menu.component.ts

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from '../../../core/models/menu.model';
import { MenuService } from '../../../core/services/menu.service';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, NgClass, NgFor, NgIf, NgTemplateOutlet, RouterLink, RouterLinkActive, AngularSvgIconModule, SidebarSubmenuComponent],
  templateUrl: './sidebar-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidebarMenuComponent {
  constructor(public menuService: MenuService) {}
  trackByLabel(index: number, item: { label: string }) { return item.label; }
  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}