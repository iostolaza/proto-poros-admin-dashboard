// Recursive submenu, matching lannodev.
// Standalone, OnPush.
// References:
// - lannodev repo: https://github.com/lannodev/angular-tailwind/blob/main/src/app/modules/layout/components/sidebar/sidebar-submenu.component.ts
// - Angular docs: https://angular.dev/extended-diagnostics/NG8103 (NG8103 fix, v20.1.0)

import { CommonModule, NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from '../../../core/models/menu.model';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [CommonModule, NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule],
  templateUrl: './sidebar-submenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSubmenuComponent {
  @Input() public submenu: SubMenuItem = {};

  constructor(public menuService: MenuService) {}

  public toggleMenu(menu: SubMenuItem) {
    this.menuService.toggleSubMenu(menu);
  }
}