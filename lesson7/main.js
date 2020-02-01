'use srict';

let money,

//Переписать функцию start циклом do while
    start = function() {
      do {
        money = prompt('Ваш ежемесячный доход?');
      } while (!isNumber(money))
}

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};


/*let income = 'Стрижка овец', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Домино, БараБан'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 100000, 
    period = 12;*/

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Домино, БараБан');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    //let question1,
        //question2;
        for (let i = 0; i < 2; i++) {
          //question1 = prompt('Введите обязательную статью расходов');
          //question2 = +prompt('Во сколько это обойдется?');
          appData.expenses[prompt('Введите обязательную статью расходов')] = +prompt('Во сколько это обойдется?');
          //console.log('appData.expense: ', appData);
        }
  },
  getExpensesMonth: function() {
    let sum = 0;
    for (key in appData.expenses)
      sum += appData.expenses[key];
      return sum;
  },

  getBudget: function() {
    appData.budgetMonth = money - expensesAmount;
    console.log('Накопления за месяц: ', appData.budgetMonth);

    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    console.log('Бюджет на день: ' + appData.budgetDay);

  },

  getTargetMonth: function() {
    let isTargeted = Math.ceil(appData.mission / appData.budgetMonth);
    //Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
    if (isTargeted > 0) {
      return('Ваша цель будет достигнута за ' + isTargeted + ' месяцев')
    }
    else return('Цель не будет достигнута');
  },

  getStatusIncome: function () {

    if (appData.budgetDay > 1200) {
      return('У вас высокий уровень дохода');
    } 
    else if (1200 > appData.budgetDay && appData.budgetDay > 600) {
      return('У вас средний уровень дохода');
    }
    else if (600 > appData.budgetDay && appData.budgetDay > 0) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } 
    else if (0 > appData.budgetDay) {
     return('Что то пошло не так');
    };
    
  }

  
};
console.log('Цель заработать ' + appData.mission + ' рублей/долларов/гривен/юани');
start();
//console.log('Ваш доход: ', money);
appData.asking();
appData.getExpensesMonth();
let expensesAmount = appData.getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц: ', expensesAmount);
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getTargetMonth());
appData.getStatusIncome();
console.log(appData.getStatusIncome());
/*
let showTypeOf = function(item){
  console.log(typeof item);
}
showTypeOf (money);
showTypeOf(income);
showTypeOf(deposit);
*/

//console.log(addExpenses.length);

//console.log('Период равен ' + period + ' месяцев');



//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)

//console.log('deposit: ', appData.deposit);

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


//let expenses = [];










//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)



//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 



//Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат




//Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)


//Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль округлив в меньшую сторону

/*Написать конструкцию условий (расчеты приведены в рублях)	

Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200*/


  
  











