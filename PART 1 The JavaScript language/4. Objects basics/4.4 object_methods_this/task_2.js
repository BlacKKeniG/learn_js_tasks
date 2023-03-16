//2
    // Создайте объект calculator (калькулятор) с тремя методами:
    // 
    // read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    // sum() (суммировать) возвращает сумму сохранённых значений.
    // mul() (умножить) перемножает сохранённые значения и возвращает результат.
    
"use strict";

let calculator = {

    fistValue : 0,
    secondValue : 0,  

    read() {
        this.fistValue = +prompt("введите первое значение!", "0");
        this.secondValue = +prompt("введите второе значение!", "0");
    },

    sum() {
        return this.fistValue + this.secondValue;
    },

    mul() {
        return this.fistValue * this.secondValue;
    },
};

calculator.read();
alert( `Сумма = ${calculator.sum()}` );
alert( `Произведение  = ${ calculator.mul()}` );