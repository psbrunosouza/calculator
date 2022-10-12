import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculatorActionNumberService {

  displayValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  add(value: string): void {
    let numbers = Array(10).fill(0).map((value, index) => index);
    if(parseInt(value) && numbers.includes(parseInt(value))){
      this.displayValue.next(this.displayValue.value + value);
    }
  }

  removeLastValue(): void {
    this.displayValue.next(this.displayValue.value.slice(0, -1))
  }
}
