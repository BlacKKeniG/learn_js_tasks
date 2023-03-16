/*Повторный bind
важность: 5
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?
*/

'use strict'

function f() {
    console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f(); // Вася