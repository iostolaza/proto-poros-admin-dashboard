import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  constructor(public menuService: MenuService) {}

  toggleMenu(menu: MenuItem) {
    this.menuService.toggleMenu(menu);
  }
}
