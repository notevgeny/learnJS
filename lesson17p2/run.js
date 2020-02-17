document.addEventListener('DOMContentLoaded', function () {

 'use strict'

 let date = new Date(),
     time = date.toLocaleTimeString(),
     newYear = new Date('1 january 2021'),
     hours = date.getHours(),
     minutes = date.getMinutes(),
     dayType = ['утро', 'день', 'вечер', 'ночи'];
     
// день недели
const daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// до нового года
let dateAmount = Math.floor((newYear - date) / 1000 / 3600 / 24);

// время суток
 function getTimeOfDay(hours){
   if (hours >= 4 && hours < 12) {
   return 'Добрый ' + dayType[0];
   }
   else if (hours >=12 && hours < 16){
    return 'Добрый ' + dayType[1];
   }
   else if (hours >=16 && hours < 0) {
    return 'Добрый ' + dayType[2];
   }
   else return 'Доброй ' + dayType[3];
}
// название дня недели
function getDayName() {
 let days = daysName[date.getDay()];
 return days;
}
// день/ночь
function getAMPM(){
 let ampm = hours >= 12 ? 'PM' : 'AM';
 
 return `${getZero(time)} ${ampm}`;
}

function getZero(num){
	if (num >= 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

let summary = 
`${getTimeOfDay()} 
Сегодня: ${getDayName()} 
Текущее время: ${getAMPM()} 
До нового года осталось ${dateAmount} дней `;

console.log(summary);

});
