import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacts {}
