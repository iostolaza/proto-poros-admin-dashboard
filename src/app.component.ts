
// src/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestIconComponent } from 'src/app/test-icon/test-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Empty root component; all content handled via routing
}
