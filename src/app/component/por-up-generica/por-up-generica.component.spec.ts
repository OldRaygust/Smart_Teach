import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorUpGenericaComponent } from './por-up-generica.component';

describe('PorUpGenericaComponent', () => {
  let component: PorUpGenericaComponent;
  let fixture: ComponentFixture<PorUpGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorUpGenericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorUpGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
