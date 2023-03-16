/*
Сумма с помощью замыканий

Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

'use strict'

function sum(value_1){
    return function(value_2){
        return value_1 + value_2;
    }
}

console.log( sum(5)(10) );