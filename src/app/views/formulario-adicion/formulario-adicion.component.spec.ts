import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdicionComponent } from './formulario-adicion.component';

describe('FormularioAdicionComponent', () => {
  let component: FormularioAdicionComponent;
  let fixture: ComponentFixture<FormularioAdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAdicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
