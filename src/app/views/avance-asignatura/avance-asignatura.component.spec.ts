import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceAsignaturaComponent } from './avance-asignatura.component';

describe('AvanceAsignaturaComponent', () => {
  let component: AvanceAsignaturaComponent;
  let fixture: ComponentFixture<AvanceAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvanceAsignaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvanceAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
