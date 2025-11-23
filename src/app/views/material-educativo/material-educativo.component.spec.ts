import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEducativoComponent } from './material-educativo.component';

describe('MaterialEducativoComponent', () => {
  let component: MaterialEducativoComponent;
  let fixture: ComponentFixture<MaterialEducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialEducativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
