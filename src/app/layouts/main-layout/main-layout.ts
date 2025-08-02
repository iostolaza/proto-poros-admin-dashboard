import { Component, inject, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../top-menu/top-menu';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';
import { LayoutService } from '../../core/services/layout.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { signOut } from 'aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopMenu, Sidebar, Footer],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout implements OnInit, OnDestroy {
  layout = inject(LayoutService);
  private router = inject(Router);
  private idle = inject(Idle);
  private keepalive = inject(Keepalive);

  ngOnInit() {
    this.idle.setIdle(3600); // 1 hour inactivity
    this.idle.setTimeout(30); // Warn 30s before timeout
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // Mouse/keyboard interrupts reset timer

    this.idle.onTimeout.subscribe(() => {
      signOut();
      this.router.navigate(['/sign-in']);
    });

    this.idle.onTimeoutWarning.subscribe((countdown) => {
      console.log(`Timeout in ${countdown} seconds - Move mouse to stay logged in`);
      // Optional: Show modal warning
    });

    this.keepalive.interval(15); // Ping server every 15s to keep session alive if active

    this.idle.watch(); // Start watching
  }

  ngOnDestroy() {
    this.idle.stop();
  }
}
