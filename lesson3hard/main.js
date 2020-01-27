'use srict';

/*Переменная lang может принимать 2 значения: 'ru' 'en'.

Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
*/



let daysRu = ['Понедельник', 'Вторник', 'Среда',  'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let lang = prompt('Переменная lang может принимать только 2 значения: ru / en. Выберите язык: ', 'ru');

/*через if, 

if (lang == 'ru') {
  console.log(daysRu);
}
else if (lang == 'en'){
  console.log(daysEn);
}
else {
  alert('Ошибка! Обновите страницу');
}
*/


/*через switch-case 

switch (lang) {
  case 'ru': console.log(daysRu);
    break;
  case 'en': console.log(daysEn);
    break;
  default: alert('Ошибка! Обновите страницу');
}
*/


/*через многомерный массив без ифов и switch. 

let days = [
            ['Понедельник', 'Вторник', 'Среда',  'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 
            ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
]
let lang = prompt('Переменная lang может принимать только 2 значения: ru / en. Выберите язык: ', 'ru');
 
for (let i = 0; i < 7; i++) {
  let sum = (lang == 'ru') ? console.log( days[0][i] ) : 
  (lang == 'en') ? (console.log( days[1][i] )) : 
  console.log('Ошибка');
}


*/


/*У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch */

let namePerson = prompt('Выбери имя для главного героя', 'Валера');

let message = (namePerson == 'Артем' || namePerson == 'артем') ? 'директор' :
  (namePerson == 'Максим' || namePerson == 'максим') ? 'преподаватель' :
  'студент';

alert( message );








