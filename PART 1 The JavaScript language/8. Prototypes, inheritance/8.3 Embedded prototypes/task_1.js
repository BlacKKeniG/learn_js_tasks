/*
Добавить функциям метод "f.defer(ms)"

Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

'use strict'

function f() {
    console.log("Hello!");
}

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

f.defer(3000);