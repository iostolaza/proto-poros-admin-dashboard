// src/test-icon/test-icon.component.ts
// Standalone test component for SVG icon rendering.
// Imports AngularSvgIconModule locally for testability.
// References:
// - angular-svg-icon GitHub: https://github.com/czeckd/angular-svg-icon (v19.1.1, component usage)
// - Angular docs: https://angular.dev/guide/components/imports (v20.1.0, standalone)

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-test-icon',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './test-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // For performance
})
export class TestIconComponent {}