import { TestBed } from '@angular/core/testing';

import { CalculatorActionNumberService } from './calculator-action-number.service';

describe('calculate actions', () => {
  let service: CalculatorActionNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorActionNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
