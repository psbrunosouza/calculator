import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cl-action-button',
  templateUrl: './calculator-action-button.component.html',
  styleUrls: ['./calculator-action-button.component.scss']
})
export class CalculatorActionButtonComponent implements OnInit {

  @Input() value!: string;

  @Output() selectedButtonEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}
