import {Component, OnInit} from '@angular/core';
import {Calculator} from "../calculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calculator: Calculator = {
    value: '',
    operator: '',
    expressionFirst: '',
    expressionLast: '',
  };

  constructor() {

  }

  ngOnInit(): void {
  }

  pressKey(key: any) {
    this.calculator.value += key;

    if (key === 'X' || key === '+' || key === '-' || key === '/') {
      this.calculator.operator = key;
    }
    // console.log(this.calculator.value)
  }

  getResult() {
    // @ts-ignore
    // this.calculator.expressionLast
    let first = parseFloat(this.calculator.value?.split(this.calculator.operator)[1]);
    // @ts-ignore
    // this.calculator.expressionFirst
    let last = parseFloat(this.calculator.value?.split(this.calculator.operator));
    let operator = this.calculator.operator;
    if (operator === '+') {
      return first + last;
    } else if (operator === '-') {
      return first - last;
    } else if (operator === 'X') {
      return first * last;
    } else {
      // let test = first / last;
      //  console.log(test)
      return first / last;
    }
  }

  clear() {
    this.calculator.value = '';
  }
}
