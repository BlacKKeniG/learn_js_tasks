/*
Поиск элементов
Вот документ с таблицей и формой.

https://learn.javascript.ru/task/find-elements/table.html

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
-->
*/

let table = document.getElementById('age-table');
let labels = table.querySelectorAll('label');
let fistTd = table.querySelector('td');
let formSearch = document.querySelector('form[name="search"]');
let fistFormSearchInput = form.querySelector('input');