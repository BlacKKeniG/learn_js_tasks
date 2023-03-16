/*
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.
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

//////////////////

function printListUseLoop(list){
    let begin = list;

    while(begin != null){
        console.log(begin.value);
        begin = begin.next;
    }
}

console.log("Loop: ");
printListUseLoop(list);

////////////////////

function printListUseRecursion(list){
    console.log(list.value);
    
    if(list.next){
        printListUseRecursion(list.next)
    }
}

console.log("Recursion: ");
printListUseRecursion(list);