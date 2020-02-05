'use strict'

// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

let dateNow = new Date();
let monthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let month = monthName[dateNow.getMonth()];
let days = daysName[dateNow.getDay()];




// 1) Выведите на страницу текущую дату и время в 2-х форматах: 

    // a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
console.log('Сегодня ' + days + ', ' + dateNow.getDate() + ' ' + month + ', ' +  dateNow.getFullYear() + ' года, ' + dateNow.getHours() + ' часов ' + dateNow.getMinutes() + ' минут ' + dateNow.getSeconds() + ' секунд');

    // б) '04.02.2020 - 21:05:33' (1 БАЛЛ)

console.log( getZero(dateNow.getDate()) + '.' + getZero(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear() + ' - ' + dateNow.getHours() + ':' + getZero(dateNow.getMinutes()) + ':' + dateNow.getSeconds());


// 2) Для вывода в формате (а) напишите функцию, которая будет менять менять склонение слов в зависимости от числа, "час, часов, часа"

function showDeclension(num, wordType){
 num = Math.abs(num) % 100; let num1 = num % 10;
 if (num === 1 && num1 === 1) { 
		return num + ' ' + wordType[0];
 } 
 else if (num > 10 && num < 20) { 
  return num + ' ' + wordType[2];
 }
 else 
  if (num1 > 1 && num1 < 5) {
   return num + ' ' + wordType[1];
  }
   
   else
   {
    return num + ' ' + wordType[2];
   }
};

console.log('Сегодня ' + days + ', ' + dateNow.getDate() + ' ' + month + ', ' +  dateNow.getFullYear() + ' года, ' + showDeclension(dateNow.getHours(), ['час', 'часа', 'часов']) + ' ' + showDeclension(dateNow.getMinutes(), ['минута', 'минуты', 'минут']) + ' ' + showDeclension(dateNow.getSeconds(), ['секунда', 'секунды', 'секунд']));



// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)


function getZero(num){
	if (num >= 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(getZero(dateNow.getHours()) + ':' + getZero(dateNow.getMinutes()) + ':' + getZero(dateNow.getSeconds()) + ' ' + getZero(dateNow.getDate()) + '.' + getZero(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear());

// 4) С помощью функции setInterval, реализуйте вывод даты и времени каждую секунду (1 БАЛЛ)


let timerId = setInterval(function showDate() {
 let dateNow1 = new Date();
 timerId = console.log('Текущие дата и время: ' + getZero(dateNow1.getDate()) + '.' + getZero(dateNow1.getMonth() + 1) + '.' + dateNow1.getFullYear() + ' ' + getZero(dateNow1.getHours()) + ':' + getZero(dateNow1.getMinutes()) + ':' + getZero(dateNow1.getSeconds()) )
}, 1000);

