'use strict'

// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

let dateNow1 = new Date(2020, 1, 4, 21, 5, 33);
let monthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let month = monthName[dateNow1.getMonth()];
let days = daysName[dateNow1.getDay()];




// 1) Выведите на страницу текущую дату и время в 2-х форматах: 

    // a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
console.log('Сегодня ' + days + ', ' + dateNow1.getDate() + ' ' + month + ', ' +  dateNow1.getFullYear() + ' года, ' + dateNow1.getHours() + ' час ' + dateNow1.getMinutes() + ' минут ' + dateNow1.getSeconds() + ' секунды');

    // б) '04.02.2020 - 21:05:33' (1 БАЛЛ)

console.log( getZero(dateNow1.getDate()) + '.' + getZero(dateNow1.getMonth() + 1) + '.' + dateNow1.getFullYear() + ' - ' + dateNow1.getHours() + ':' + getZero(dateNow1.getMinutes()) + ':' + dateNow1.getSeconds());


// 2) Для вывода в формате (а) напишите функцию, которая будет менять менять склонение слов в зависимости от числа, "час, часов, часа"

function showDeclension(num, wordType){
 num = Math.abs(num) % 100; let num1 = num % 10;
 if (num1 === 1 ) { 
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

console.log('Сегодня ' + dateNow1.getDate() + ' ' + month + ', ' +  dateNow1.getFullYear() + ' года, ' + showDeclension(dateNow1.getHours(), ['час', 'часа', 'часов']) + ' ' + showDeclension(dateNow1.getMinutes(), ['минута', 'минуты', 'минут']) + ' ' + showDeclension(dateNow1.getSeconds(), ['секунда', 'секунды', 'секунд']));



// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)

let dateNow2 = new Date();

function getZero(num){
	if (num >= 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(getZero(dateNow2.getHours()) + ':' + getZero(dateNow2.getMinutes()) + ':' + getZero(dateNow2.getSeconds()) + ' ' + getZero(dateNow2.getDate()) + '.' + getZero(dateNow2.getMonth() + 1) + '.' + dateNow2.getFullYear());

// 4) С помощью функции setInterval, реализуйте вывод даты и времени каждую секунду (1 БАЛЛ)


let timerId = setInterval(function showDate() {
 let dateNow3 = new Date();
 timerId = console.log('Текущие дата и время: ' + getZero(dateNow3.getDate()) + '.' + getZero(dateNow3.getMonth() + 1) + '.' + dateNow3.getFullYear() + ' ' + getZero(dateNow3.getHours()) + ':' + getZero(dateNow3.getMinutes()) + ':' + getZero(dateNow3.getSeconds()) )
}, 1000);

