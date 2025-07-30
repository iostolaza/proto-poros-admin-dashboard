import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignIn } from './sign-in';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignIn', () => {
  let component: SignIn;
  let fixture: ComponentFixture<SignIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignIn, AmplifyAuthenticatorModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(SignIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
