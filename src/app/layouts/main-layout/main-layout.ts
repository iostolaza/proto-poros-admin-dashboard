import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../top-menu/top-menu';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopMenu, Sidebar, Footer],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  layout = inject(LayoutService);
}
