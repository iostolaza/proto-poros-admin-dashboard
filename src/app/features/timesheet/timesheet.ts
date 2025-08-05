import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timesheet {}
