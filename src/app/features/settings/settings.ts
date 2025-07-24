
// export class Settings {
//   layout = inject(LayoutService);
//   isDarkMode = this.layout.isDarkMode;

//   toggleDarkMode() {
//     this.layout.toggleDarkMode();
//   }
// }

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Settings {
  layout = inject(LayoutService);

  toggleDarkMode() {
    this.layout.toggleDarkMode();
  }
}