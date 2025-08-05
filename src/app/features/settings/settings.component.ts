// src/app/features/settings/settings.component.ts: Fixed to use LayoutService instead of ThemeService
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../core/services/layout.service'; // Switched to LayoutService

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class Settings {
  constructor(public layoutService: LayoutService) {} // Changed to layoutService

  toggleThemeMode() {
    this.layoutService.toggleDarkMode(); // Use LayoutService method
  }
}
