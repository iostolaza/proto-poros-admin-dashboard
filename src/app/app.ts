import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  template: `
    <div *ngIf="isLoading; else content">Loading...</div>
    <ng-template #content>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  isLoading = true;
  constructor() {
    const router = inject(Router);
    router.events.subscribe(() => this.isLoading = false); 
  }
}
