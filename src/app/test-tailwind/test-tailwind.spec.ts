import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTailwind } from './test-tailwind';

describe('TestTailwind', () => {
  let component: TestTailwind;
  let fixture: ComponentFixture<TestTailwind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTailwind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTailwind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
