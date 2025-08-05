import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class Settings {
  constructor(public themeService: ThemeService) {}

  toggleThemeMode() {
    this.themeService.theme.update(theme => {
      const mode = theme.mode === 'light' ? 'dark' : 'light';
      return { ...theme, mode };
    });
  }
}
