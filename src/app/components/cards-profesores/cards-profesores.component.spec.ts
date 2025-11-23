import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProfesoresComponent } from './cards-profesores.component';

describe('CardsProfesoresComponent', () => {
  let component: CardsProfesoresComponent;
  let fixture: ComponentFixture<CardsProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
