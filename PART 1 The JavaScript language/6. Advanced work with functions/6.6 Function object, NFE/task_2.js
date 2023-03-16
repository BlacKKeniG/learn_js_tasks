/*
Сумма с произвольным количеством скобок
важность: 2
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/

'use strict'

function sum(value_1){
    let result = value_1;

    return function foo(value_2){
        result += value_2;

        foo.result = () => result;

        return foo;
    }


}
  
console.log( sum(1)(2).result() ); // 3
console.log( sum(5)(-1)(2).result() ); // 6
console.log( sum(6)(-1)(-2)(-3).result() ); // 0
console.log( sum(0)(1)(2)(3)(4)(5).result() ); // 15