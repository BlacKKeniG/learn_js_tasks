/*
Вывод односвязного списка в обратном порядке
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.

*/

'use strict'

function makeTestList(){

    let arr = [{value: 11, next : null},
        {value: 22, next : null},
        {value: 33, next : null},
        {value: 44, next : null},
        {value: 55, next : null},
        {value: 66, next : null},
        {value: 77, next : null},]
            
    for(let i = 0; i < arr.length - 1; ++i) {
        arr[i].next = arr[i + 1];
    }
    
    return arr[0];
}

let list = makeTestList();

//loop

function printListFromEndUseLoop(list) {
    
    let begin = list;
    let arr = [];

    while(begin != null){
        arr.push(begin.value);
        begin = begin.next;
    }

    for(let i = arr.length; i >= 0; --i){
        console.log(arr[i]);
    }
}

console.log("Loop:")
printListFromEndUseLoop(list);

//recusion
function printListFromEndUseRecursion(list){
    let begin = list;
    if(begin.next){
        printListFromEndUseRecursion(begin.next);
    }
    console.log(list.value);
}

console.log('Recursion:');
printListFromEndUseRecursion(list);