/*
 * Сумма введённых чисел
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

'use strict'

function sumInput() {
    let userInputValue,
        values = [],
        sum = 0;

    while(true) {
        userInputValue = prompt("Введите число", 0);

        if(userInputValue === "" || userInputValue === null || !isFinite(userInputValue)){
            break;
        }

        values.push(+userInputValue);
    }

    for(let value of values) {
        sum += value;
    }

    return sum;
}

console.log( sumInput() );