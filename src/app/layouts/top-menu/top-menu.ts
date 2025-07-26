import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavMenu } from './nav-menu/nav-menu';
import { ProfileMenu } from './profile-menu/profile-menu';
import { MobileMenu } from './mobile-menu/mobile-menu';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [AngularSvgIconModule, NavMenu, ProfileMenu, MobileMenu],
  templateUrl: './top-menu.html',
  styleUrls: ['./top-menu.scss'],
})
export class TopMenu {
  constructor(public menuService: MenuService) {}

  toggleMobileMenu() {
    this.menuService.showMobileMenu.set(true);
  }
}
