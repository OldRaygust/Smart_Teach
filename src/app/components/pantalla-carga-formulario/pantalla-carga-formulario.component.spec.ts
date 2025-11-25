import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCargaFormularioComponent } from './pantalla-carga-formulario.component';

describe('PantallaCargaFormularioComponent', () => {
  let component: PantallaCargaFormularioComponent;
  let fixture: ComponentFixture<PantallaCargaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaCargaFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaCargaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
