import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  result = 0;
  num = {
    num1: null,
    num2: null
  };
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  sumar(num1, num2) {
    let sum;
    sum = num1 + num2;
    console.log(sum);
    this.result = this.result + sum;
  }
  // tslint:disable-next-line:typedef
  multiplicar(num1, num2) {
    let sum;
    sum = num1 * num2;

    this.result = this.result * sum;
  }
  // tslint:disable-next-line:typedef
  restar(num1, num2){
    let sum;
    sum = num1 - num2;
    console.log(sum);
    this.result = this.result - sum;
  }
  // tslint:disable-next-line:typedef
  dividir(num1, num2) {
    let sum;
    sum = num1 / num2;
    console.log(sum);
    this.result = sum;
  }
  // tslint:disable-next-line:typedef
  borrar(){
    this.num.num1 = 0;
    this.num.num2 = 0;
    this.result = 0;
  }
}
