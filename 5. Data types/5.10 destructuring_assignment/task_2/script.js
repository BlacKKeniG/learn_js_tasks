/*
Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

'use strict'

function topSalary(salaries) {

    let maxSalery = 0;
    let returName = null;

    for(let [name, salery] of Object.entries(salaries)) {
        if(salery > maxSalery) {
            maxSalery = salery;
            returName = name;
        }
    }

    return returName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( topSalary(salaries) );