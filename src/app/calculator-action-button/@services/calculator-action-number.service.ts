import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculatorActionNumberService {

  displayValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  add(value: string): void {
    this.displayValue.subscribe((storedValue) => {
      let transitionalValue = storedValue + value;
      this.displayValue.next(transitionalValue);
    })
  }

  removeLastValue(): void {
  }

  clearAll(): void {
  }
}
