'use srict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};


let money,
    income = 'Стрижка овец', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Домино, БараБан'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 100000, 
    period = 12;


//Переписать функцию start циклом do while
let start = function() {
  do {
    money = prompt('Ваш ежемесячный доход?');
  } while (!isNumber(money))
}
start();


let showTypeOf = function(item){
  console.log(typeof item);
}
showTypeOf (money);
showTypeOf(income);
showTypeOf(deposit);


//console.log(addExpenses.length);

//console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(','));

//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)

console.log('deposit: ', deposit);

/*5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные
“Введите обязательную статью расходов?” (например expenses1, expenses2)
“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных*/
/*let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = parseInt(prompt('Во сколько это обойдется?'));
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = parseInt(prompt('Во сколько это обойдется?'));
*/

//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц


let expenses = [];

let getExpensesMonth = function() {
  let sum = 0;  

  for (let i = 0; i < 2; i++) {
    
    expenses[i] = prompt('Введите обязательную статью расходов');
    //Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
    let ask = prompt('Во сколько это обойдется?');
    while (!isNumber(ask)) {
      ask = prompt('Во сколько это обойдется?');
    }
    sum += +ask;
  }
  console.log(expenses);
  return sum;
};


let expensesAmount = getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц: ', expensesAmount);





//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

let getAccumulatedMonth = function() {
  return money - expensesAmount;
}

//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

let accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц: ', accumulatedMonth);

//Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

let getTargetMonth = function() {
  let isTargeted = Math.ceil(mission/accumulatedMonth);
  //Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
  if (isTargeted > 0) {
    return('Ваша цель будет достигнута за ' + isTargeted + ' месяцев')
  }
  else return('Цель не будет достигнута');
}


//Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
console.log(getTargetMonth ());

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











