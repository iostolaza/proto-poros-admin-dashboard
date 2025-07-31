// src/app/features/auth/auth.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from './auth';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { RouterOutlet } from '@angular/router';

describe('Auth', () => {
  let component: Auth;
  let fixture: ComponentFixture<Auth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auth, AmplifyAuthenticatorModule, RouterOutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
