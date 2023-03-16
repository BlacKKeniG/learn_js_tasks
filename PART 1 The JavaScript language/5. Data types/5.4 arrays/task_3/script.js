//Вызов в контексте массива
//Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // a, b, [function], т.к. this это arr