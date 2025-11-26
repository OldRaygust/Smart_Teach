import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCargaEdicionComponent } from './pantalla-carga-edicion.component';

describe('PantallaCargaEdicionComponent', () => {
  let component: PantallaCargaEdicionComponent;
  let fixture: ComponentFixture<PantallaCargaEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaCargaEdicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaCargaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
