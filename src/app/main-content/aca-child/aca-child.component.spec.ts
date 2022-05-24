import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaChildComponent } from './aca-child.component';

describe('AcaChildComponent', () => {
  let component: AcaChildComponent;
  let fixture: ComponentFixture<AcaChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcaChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
