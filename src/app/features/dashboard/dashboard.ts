import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  metrics = signal<{ name: string; value: number }[]>([
    { name: 'Users', value: 100 },
    { name: 'Analytics', value: 500 },
  ]);
}

