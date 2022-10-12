import {Component, OnInit} from '@angular/core';
import {CalculatorActionNumberService} from "./@services/calculator-action-number.service";

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentValue: string = "";

  calculatorButtons: string[] = [
    'C-CE', '+/-', '√', '%', 'MRC', 'M-', 'M+', '/', '7',
    '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='
  ];

  title = 'calculator';

  constructor(private calculatorActionNumberService: CalculatorActionNumberService) {
  }

  ngOnInit(): void {
    this.calculatorActionNumberService.displayValue.subscribe((value) => {
      this.currentValue = value;
    })
  }

  getSelectedButton(selectedButton: string): void {
    if(selectedButton === 'C-CE'){
      this.calculatorActionNumberService.removeLastValue();
    } else {
      this.calculatorActionNumberService.add(selectedButton);
    }
  }
}
