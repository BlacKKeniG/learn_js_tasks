/*
Изменяем "prototype"

В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
*/

'use strict'

//Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

///Rabbit.prototype = {}; //!!!!!

console.log( rabbit.eats ); // true

//…А если код такой (заменили одну строчку)?
// Rabbit.prototype.eats = false; //!!!!!

console.log( rabbit.eats ); // false

//Или такой (заменили одну строчку)?
// delete rabbit.eats; //!!!!!

console.log( rabbit.eats ); // true

//Или, наконец, такой:
//delete Rabbit.prototype.eats; //!!!!!

console.log( rabbit.eats ); // undefined