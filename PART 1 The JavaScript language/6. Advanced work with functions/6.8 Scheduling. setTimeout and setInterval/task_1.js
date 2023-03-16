/*
Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

function printNumbersInterval(from, to){
    let start = from;

    let timerId = setInterval(() => {
        console.log(start);
        if(start >= to){
            clearInterval(timerId);
        }
        ++start;
    },1000);
}

printNumbersInterval(1, 5);

function printNumbersTimeOut(from, to){
    let start = from;

    function inner(){
        console.log(start);

        if (start < to) {
            setTimeout(inner, 1000);
        }
        ++start;
    }
    
    setTimeout(inner, 1000);
}

printNumbersTimeOut(1, 5);