//1
// Можно ли добавить свойство строке?
//Взгляните на следующий код:
//Как вы думаете, это сработает? Что выведется на экран?

let str = "Привет";

str.test = 5;

console.log(str.test); // undefined - временный обьект удалён