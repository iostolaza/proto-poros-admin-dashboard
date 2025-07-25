import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { signOut } from 'aws-amplify/auth';
// import { Auth } from 'aws-amplify';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, AngularSvgIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'translateY(0)', visibility: 'visible' })),
      state('closed', style({ opacity: 0, transform: 'translateY(-20px)', visibility: 'hidden' })),
      transition('open => closed', animate('0.2s')),
      transition('closed => open', animate('0.2s')),
    ]),
  ],
})
export class Header {
  layout = inject(LayoutService);
  router = inject(Router);
  isDropdownOpen = signal(false);
  showMobileMenu = this.layout.showMobileMenu;
  profileImgPath = 'assets/profile/jurica-koletic.jpg';

  toggleDropdown() {
    this.isDropdownOpen.update(open => !open);
  }

  toggleSidebar() {
    this.layout.toggleSidebar();
  }

  toggleMobileMenu() {
    this.layout.toggleMobileMenu();
  }

  async logout() {
    await signOut();
    this.router.navigate(['/auth']);
  }
}
