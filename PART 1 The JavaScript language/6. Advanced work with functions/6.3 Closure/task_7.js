/*
Армия функций

Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
*/

'use strict'

function makeArmy() {
    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            console.log( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  army[0]();
  army[5]();