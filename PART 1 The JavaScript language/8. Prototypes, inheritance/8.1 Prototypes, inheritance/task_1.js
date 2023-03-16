/*
Работа с прототипами

В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
*/

'use strict'

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true (1) 

delete rabbit.jumps;

console.log( rabbit.jumps ); // null (2)

delete animal.jumps;

console.log( rabbit.jumps ); // undefined (3)