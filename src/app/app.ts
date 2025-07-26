import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainLayout } from './layouts/main-layout/main-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayout],
  template: `
    <app-main-layout></app-main-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
