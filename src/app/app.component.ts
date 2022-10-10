import { Component } from '@angular/core';

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentValue: string = "";

  calculatorButtons: string[] = [
    'C-CE',
    '+/-',
    '√',
    '%',
    'MRC',
    'M-',
    'M+',
    '/',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '='
  ];

  title = 'calculator';

  getSelectedButton(selectedButton: string): void {
    let numbers = Array(10).fill(0).map((value, index) => index);
    if(parseInt(selectedButton) && numbers.includes(parseInt(selectedButton))){


      this.currentValue += selectedButton;
    }
  }
}
