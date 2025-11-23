import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesProfesoresComponent } from './tables-profesores.component';

describe('TablesProfesoresComponent', () => {
  let component: TablesProfesoresComponent;
  let fixture: ComponentFixture<TablesProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
