// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   templateUrl: './footer.html',
//   styleUrl: './footer.scss',
// })
// export class Footer {}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}