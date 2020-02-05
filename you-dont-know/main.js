'use strict'

// Используя только файл скрипта (html руками не трогать) выполнить такие действия:

// Восстановить порядок книг.
let showAllBooks = document.querySelectorAll('.books'),
    setBookOrder = document.querySelectorAll('.book');

showAllBooks[0].insertBefore(setBookOrder[1], setBookOrder[0]);
showAllBooks[0].insertBefore(setBookOrder[4], setBookOrder[2]);
showAllBooks[0].insertBefore(setBookOrder[3], setBookOrder[2]);
showAllBooks[0].insertBefore(setBookOrder[5], setBookOrder[2]);


// Заменить картинку заднего фона на другую из папки image

let changeBack = document.querySelector('body');
changeBack.setAttribute('style', 'background: url("./image/you-dont-know-js.jpg") no-repeat center /cover');

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
setBookOrder[4].querySelector('a').textContent ='Книга 3. this и Прототипы Объектов';



// Удалить рекламу со страницы

document.querySelector('.adv').remove();


// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

let collectChapter2 = setBookOrder[0].querySelectorAll('ul'),
    elemChapter2 = setBookOrder[0].querySelectorAll('li');

collectChapter2[0].insertBefore(elemChapter2[3], elemChapter2[2]);
collectChapter2[0].insertBefore(elemChapter2[6], elemChapter2[2]);
collectChapter2[0].insertBefore(elemChapter2[8], elemChapter2[2]);
collectChapter2[0].insertBefore(elemChapter2[4], elemChapter2[2]);
collectChapter2[0].insertBefore(elemChapter2[5], elemChapter2[2]);
collectChapter2[0].insertBefore(elemChapter2[2], elemChapter2[10]);

let collectChapter5 = setBookOrder[5].querySelectorAll('ul'),
    elemChapter5 = setBookOrder[5].querySelectorAll('li');
    console.log('elemChapter5: ', elemChapter5);
   
    collectChapter5[0].insertBefore(elemChapter5[9], elemChapter5[2]);
    collectChapter5[0].insertBefore(elemChapter5[3], elemChapter5[2]);
    collectChapter5[0].insertBefore(elemChapter5[4], elemChapter5[2]);
    collectChapter5[0].insertBefore(elemChapter5[5], elemChapter5[8]);


// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

let collectChapter8 = setBookOrder[2].querySelectorAll('ul'),
    elemChapter8 = setBookOrder[2].querySelectorAll('li');

    let newElem = document.createElement('li');
    newElem.textContent = 'Глава 8: За пределами ES6';

    collectChapter8[0].insertBefore(newElem, elemChapter8[9]);
