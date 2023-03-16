/*
Покажите день недели
важность: 5
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

'use strict'

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()]
}

let date = new Date(2012, 0, 3);
let date2 = new Date(2014, 0, 3);

console.log(getWeekDay(date));
console.log(getWeekDay(date2));