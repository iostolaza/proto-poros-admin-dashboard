// src/app.spec.ts (fixed import path for MainLayout)
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component';  // Corrected path

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, MainLayoutComponent],
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideAngularSvgIcon()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
