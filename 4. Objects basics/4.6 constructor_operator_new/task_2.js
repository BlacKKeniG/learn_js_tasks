//2
/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

'use strict'

function Calculator () {
    this.read = function () {
        this.fistValue = +prompt("введите первое значение!", "0");
        this.secondValue = +prompt("введите второе значение!", "0");
    };

    this.sum = function() {
        return this.fistValue + this.secondValue;
    };

    this.mul =function() {
        return this.fistValue * this.secondValue;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );