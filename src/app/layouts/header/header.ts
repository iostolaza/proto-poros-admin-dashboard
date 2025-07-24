
// import { Component, inject } from '@angular/core';
// import { LayoutService } from '../../core/services/layout.service';
// import { ChangeDetectionStrategy } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   templateUrl: './header.html',
//   styleUrl: './header.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class Header {
//   layout = inject(LayoutService);
// }


import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  layout = inject(LayoutService);
  isDropdownOpen = signal(false);
  profileImgPath = 'assets/profile/jurica-koletic.jpg';

  toggleDropdown() {
    this.isDropdownOpen.update(open => !open);
  }

  toggleSidebar() {
    this.layout.toggleSidebar();
  }
}