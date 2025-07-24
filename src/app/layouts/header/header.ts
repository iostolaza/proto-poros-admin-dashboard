
import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  layout = inject(LayoutService);
}
