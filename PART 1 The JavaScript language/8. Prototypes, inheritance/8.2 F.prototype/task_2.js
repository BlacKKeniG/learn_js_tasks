/*
Создайте новый объект с помощью уже существующего

Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – 
мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно 
сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

'use strict'
//work
function Obj(a, b) {
    this.a = a,
    this.b = b;
}

let obj_1 = new Obj(1, 2);
let obj_2 = new obj_1.constructor('3, 4');

console.log(obj_2.a, obj_2.b);

//does not work - no constructor assigned

Obj.prototype = {};

let obj_3 = new Obj(5, 6);

let obj_4 = new obj_3.constructor(5, 6);
console.log(obj_4.a, obj_4.b);