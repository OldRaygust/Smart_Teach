import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionPlanificacionComponent } from './formulario-edicion-planificacion.component';

describe('FormularioEdicionPlanificacionComponent', () => {
  let component: FormularioEdicionPlanificacionComponent;
  let fixture: ComponentFixture<FormularioEdicionPlanificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEdicionPlanificacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEdicionPlanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
