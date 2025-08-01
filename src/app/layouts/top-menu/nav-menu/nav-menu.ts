import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, AngularSvgIconModule],
  templateUrl: './nav-menu.html'
})
export class NavMenu {
  constructor(public menuService: MenuService) {
    // No active logic needed since template is empty
  }

  // Remove unused methods (mouseEnter, mouseLeave, toggleMenu) as they are no longer relevant
  // trackByGroup and trackByLabel can be removed if not reused elsewhere
}
