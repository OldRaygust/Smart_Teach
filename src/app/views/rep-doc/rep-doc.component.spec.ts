import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepDocComponent } from './rep-doc.component';

describe('RepDocComponent', () => {
  let component: RepDocComponent;
  let fixture: ComponentFixture<RepDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
