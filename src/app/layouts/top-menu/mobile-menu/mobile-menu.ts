import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-menu.html'
})
export class MobileMenu {
  constructor(public menuService: MenuService) {}

  toggleMobileMenu() {
    this.menuService.showMobileMenu.set(false);
  }
}
