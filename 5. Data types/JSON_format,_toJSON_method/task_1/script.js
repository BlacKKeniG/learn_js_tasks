/*
Преобразуйте объект в JSON, а затем обратно в обычный объект

Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
*/

'use strict'

let user = {
    name: "Василий Иванович",
    age: 35
  };

  let jsonUser = JSON.stringify(user);
  console.log(jsonUser);
  
  let copyUser = JSON.parse(jsonUser);
  console.log(copyUser);