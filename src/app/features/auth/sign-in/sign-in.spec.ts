import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignIn } from './sign-in';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('SignIn', () => {
  let component: SignIn;
  let fixture: ComponentFixture<SignIn>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignIn, AmplifyAuthenticatorModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignIn);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    spyOn(console, 'log');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading initially then authenticator', async () => {
    const loadingEl = fixture.debugElement.query(By.css('.flex.items-center'));
    expect(loadingEl).toBeTruthy();  // Loading shows

    await component.ngOnInit();
    fixture.detectChanges();
    expect(component.isLoading()).toBeFalse();
    const authEl = fixture.debugElement.query(By.css('amplify-authenticator'));
    expect(authEl).toBeTruthy();
  });

  it('should redirect to dashboard if authenticated', async () => {
    spyOn(getCurrentUser as any, 'getCurrentUser').and.resolveTo({ userId: 'test' });
    spyOn(fetchAuthSession as any, 'fetchAuthSession').and.resolveTo({ tokens: {} });
    spyOn(router, 'navigate');
    await component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should log error if not authenticated', async () => {
    spyOn(getCurrentUser as any, 'getCurrentUser').and.rejectWith('No user');
    await component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Not signed in:', 'No user');
  });
});
