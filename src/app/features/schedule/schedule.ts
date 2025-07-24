import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Schedule {}
