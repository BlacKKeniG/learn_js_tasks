/*
Создать расширяемый калькулятор

Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

'use strict'

function Calculator() {
    
    
    this.methods = {
        '+' : (a, b ) => a + b,
        '-' : (a, b ) => a - b,
    }
    
    this.calculate = function(str) {
        let expressionElements = str.split(" ");
        let leftOperand = +expressionElements[0];
        let rightOperand = +expressionElements[2];
        let option = expressionElements[1];

        if (!this.methods[option] || isNaN(leftOperand) || isNaN(rightOperand)) {
            return NaN;
        }

        return this.methods[option](leftOperand, rightOperand);
    }

    this.addMethod = function(name, func) {
    this.methods[name] = func;
    };
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7")); //10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate("2 * 3") ); //6
console.log( powerCalc.calculate("4 / 2") ); //2
console.log( powerCalc.calculate("2 ** 3") ); //8