// src/app/layouts/sidebar/sidebar-submenu/sidebar-submenu.component.ts
// Standalone recursive component for submenus.
// Input for submenu data; handles toggle and collapse.

import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from '../../../core/models/menu.model';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule],
  templateUrl: './sidebar-submenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu: SubMenuItem = {};

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: SubMenuItem) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<SubMenuItem>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
