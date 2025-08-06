// Preload icons.
// References:
// - angular-svg-icon v19.1.1 https://github.com/czeckd/angular-svg-icon (loadSvg)
// - Lucide v0.536.0 https://lucide.dev (icons)
import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
@Injectable({ providedIn: 'root' })
export class IconPreloaderService {
  constructor(private registry: SvgIconRegistryService) {
    this.preload();
  }
  preload() {
    const icons = [
      '/assets/icons/lucide/home.svg',
      '/assets/icons/lucide/user.svg',
      '/assets/icons/lucide/mail.svg',
      '/assets/icons/lucide/inbox.svg',
      '/assets/icons/lucide/send.svg',
      '/assets/icons/lucide/users.svg',
      '/assets/icons/lucide/user-plus.svg',
      '/assets/icons/lucide/star.svg',
      '/assets/icons/lucide/activity.svg',
      '/assets/icons/lucide/clock.svg',
      '/assets/icons/lucide/file-check.svg',
      '/assets/icons/lucide/loader.svg',
      '/assets/icons/lucide/check.svg',
      '/assets/icons/lucide/calendar.svg',
      '/assets/icons/lucide/bar-chart.svg',
      '/assets/icons/lucide/calendar-days.svg',
      '/assets/icons/lucide/settings.svg',
      '/assets/icons/lucide/log-out.svg',
      '/assets/icons/lucide/chevrons-left.svg',
      '/assets/icons/lucide/chevron-right.svg',
      '/assets/icons/lucide/plus.svg',
      '/assets/icons/lucide/minus.svg',
      '/assets/icons/logo.svg',
      '/assets/icons/google-logo.svg'
    ];
    icons.forEach(path => this.registry.loadSvg(path));
  }
}
