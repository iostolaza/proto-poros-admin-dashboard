// Standalone sidebar wrapper, adapted from lannodev.
// Uses OnPush, dynamic width.
// References:
// - Angular docs: https://angular.dev/guide/standalone-components (v20)
// - lannodev repo: https://github.com/lannodev/angular-tailwind/blob/main/src/app/modules/layout/components/sidebar/sidebar.component.ts (structure)
// - StackOverflow: https://stackoverflow.com/questions/41551444/implementing-a-collapsible-sidebar-in-angular2 (toggle best practices)

import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService } from '../../core/services/menu.service';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(public menuService: MenuService) {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}