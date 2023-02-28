/*
Перемешайте массив

Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/

function randomInteger(min, max) {
        
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function shuffle(array) {

    for (let i = 0; i < array.length; i++) {
        let randomIndex = randomInteger(0, array.length - 1);

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

let arr = [1, 2, 3];
console.log(arr);

for(let i = 0; i < 5; ++i){
    shuffle(arr);
    console.log(arr);
}