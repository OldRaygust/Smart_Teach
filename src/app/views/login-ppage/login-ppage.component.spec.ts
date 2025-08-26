import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPpageComponent } from './login-ppage.component';

describe('LoginPpageComponent', () => {
  let component: LoginPpageComponent;
  let fixture: ComponentFixture<LoginPpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
