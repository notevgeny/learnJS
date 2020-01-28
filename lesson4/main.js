'use srict';

let money = 20000,
    income = 'Стрижка овец', 
    addExpenses = 'Ножницы, Овца', 
    deposit = true, 
    mission = 100000, 
    period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));


//console.log(addExpenses.length);

//console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

//2) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
money = +prompt('Ваш ежемесячный доход?');
//3) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(','));

//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
deposit = confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', deposit);

/*5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные
“Введите обязательную статью расходов?” (например expenses1, expenses2)
“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных*/
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = parseInt(prompt('Во сколько это обойдется?'));
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = parseInt(prompt('Во сколько это обойдется?'));


//1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

let getExpensesMonth = function() {
  return amount1 + amount2;
}
console.log('Сумма всех обязательных расходов за месяц: ', getExpensesMonth ());



//2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

let getAccumulatedMonth = function() {
  return money - getExpensesMonth();
}

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

let accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц: ', accumulatedMonth);

//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

let getTargetMonth = function() {
  return mission/accumulatedMonth;
}


//Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
console.log('Ваша цель будет достигнута за ' + Math.ceil(getTargetMonth ()) + ' месяцев');

//Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль округлив в меньшую сторону
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

/*Написать конструкцию условий (расчеты приведены в рублях)	

Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200*/

let getStatusIncome = function () {

if (budgetDay > 1200) {
  return('У вас высокий уровень дохода');
} 
else if (1200 > budgetDay && budgetDay > 600) {
  return('У вас средний уровень дохода');
}
else if (600 > budgetDay) {
  return('К сожалению у вас уровень дохода ниже среднего');
} 
else if (0 > budgetDay) {
 return('Что то пошло не так');
};

}

console.log(getStatusIncome());











