import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorActionButtonComponent } from './calculator-action-button.component';

describe('NumberButtonComponent', () => {
  let component: CalculatorActionButtonComponent;
  let fixture: ComponentFixture<CalculatorActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorActionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
