/*
Добавьте функциям декорирующий метод "defer()"

Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
*/

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    return (...args) => setTimeout(this, ms, ...args);
};

f.defer(1000)(1, 2);