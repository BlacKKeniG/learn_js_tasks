/*
Декоратор-шпион

Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.
*/

'use strict'
  
function spy(func) {

	function wrapper(...args) {
	  
	  wrapper.calls.push(args);
	  return func(...args);
	}
  
	wrapper.calls = [];
  
	return wrapper;
}

function foo(a, b) {
	console.log( a + b ); // произвольная функция или метод
}

let work = spy(foo);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call: ' + args.join() );
}