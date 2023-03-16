/*
Вычислить сумму чисел до данного
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { ... ваш код ...  }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/

'use strict'

function sumToUseLoop(n) { //второй по скорости и затратам
    let sum = 0;

    for(let i = 0; i <= n; ++i){
        sum += i;
    }
    return sum;
}

console.log(sumToUseLoop(100)); //затраты на работу со стеком

function sumToUseRecursion(n){
    return (n <= 0) ? 0 : n + sumToUseRecursion(n - 1);
}

console.log(sumToUseRecursion(100));

function sumToUseArithmeticProgression(n){ //самый быстрый, всего три арифметических операции
    return n*(n+1)/2;
}
console.log(sumToUseArithmeticProgression(100));