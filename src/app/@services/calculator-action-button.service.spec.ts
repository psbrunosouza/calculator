import { TestBed } from '@angular/core/testing';

import { CalculatorActionNumberService } from './calculator-action-number.service';

describe('calculate actions', () => {
  let service: CalculatorActionNumberService;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorActionNumberService]
    });
    service = TestBed.inject(CalculatorActionNumberService);
  })

  it('should add a number', () => {
    service.add('2')
    expect(service.displayValue.value).toEqual("2");
  });

  it('should add another number number', () => {
    service.add('3')
    expect(service.displayValue.value).toEqual("23");
  });

  it('should remove the last item added', () => {
    service.removeLastValue()
    expect(service.displayValue.value).toEqual("2");
  });

  it('should not add other values that are not numbers', () => {
    service.add('C-CE')
    expect(service.displayValue.value).toEqual("2");
  });
});
