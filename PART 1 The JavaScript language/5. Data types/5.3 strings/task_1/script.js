/*
Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

'use strict'


function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log( ucFirst("") );