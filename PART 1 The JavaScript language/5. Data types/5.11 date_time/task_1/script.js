/*
Создайте дату

Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
*/

let date = new Date("2012-02-20T03:12:00");
let date_2 = new Date(2012, 1, 20, 3, 12);

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());

console.log('||||||||||||||||||||||||||||||');

console.log(date_2);
console.log(date_2.getFullYear());
console.log(date_2.getMonth());
console.log(date_2.getDay());
console.log(date_2.getHours());
console.log(date_2.getMinutes());