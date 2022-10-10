import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cl-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss']
})
export class CalculatorDisplayComponent implements OnInit {
  @Input() value: string = "";

  constructor() { }

  ngOnInit(): void {

  }
}
