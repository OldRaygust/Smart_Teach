import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracioDocenteComponent } from './configuracio-docente.component';

describe('ConfiguracioDocenteComponent', () => {
  let component: ConfiguracioDocenteComponent;
  let fixture: ComponentFixture<ConfiguracioDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracioDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracioDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
