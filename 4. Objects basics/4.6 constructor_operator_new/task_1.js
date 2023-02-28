//1
/*
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.
*/

'use strict'

let user = {
    name : "Vasy",
    age : 15,
}

function A() {
    return user;
}

function B() {
    return user;
}

let a = new A();
let b = new B();

console.log(a == b); //true

