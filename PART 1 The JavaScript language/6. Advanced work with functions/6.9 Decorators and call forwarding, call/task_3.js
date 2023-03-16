/*
Декоратор debounce

Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

Например:

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого 
промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы.
*/

//function debounce(f, ms) {
//
//    let isFunctBusy = false;
//
//    
//    return function() {
//
//        if(isFunctBusy) return;
//
//        f.apply(this, arguments);
//
//        isFunctBusy = true;
//
//        setTimeout(() => isFunctBusy = false, ms);
//    }
//}

'use strict'

function debounce(f, ms) {
    let time = 0;
    return function() {
        if ((Date.now() - time) < ms) {
            return;
        }
        time = Date.now();
        f.apply(this, arguments);
    }
}

function printHello() {
    console.log(this);
};

let f = debounce(printHello, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)