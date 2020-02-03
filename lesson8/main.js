'use srict';

let money,

//Переписать функцию start циклом do while
    start = function() {
      do {
        money = prompt('Ваш ежемесячный доход?');
      } while (isNaN(money) || money === '' || money === null || !isNumber(money))
}

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

start();

/*let income = 'Стрижка овец', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Домино, БараБан'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 100000, 
    period = 12;*/

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: 0,
  deposit: false,
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  percentDeposit: 0,
  moneyDeposit: 0,
  asking: function() {

    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный источник заработка?')
        itemIncome.replace(/\s+/g,'')
      }
      while (typeof itemIncome !== 'string' || itemIncome === '' || itemIncome === null);
      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?')
       }
      while (isNaN(cashIncome) || !isNumber(cashIncome) || cashIncome === '' || cashIncome === null);
      appData.income[itemIncome] = cashIncome;
    }      
    let addExpenses;
    let getMainExpenses;
    let addSummary = '';
    let arr = [];
    do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
    }
    while (typeof addExpenses !== 'string' || addExpenses === '' || addExpenses === null);
    getMainExpenses = addExpenses.split(',');

    function ucFirst(str) {
      if (!str) return str;
      str = str.trim();
      return str[0].toUpperCase() + str.slice(1);
    }
    for (i = 0; i < getMainExpenses.length; i++) {
    arr[i] = ucFirst(getMainExpenses[i]);

    }
    addSummary = arr.join(', ');

    
    appData.addExpenses = addSummary;
    console.log('appData.addExpenses:', appData.addExpenses);
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
          let itemExpenses = prompt('Введите обязательную статью расходов');
          let cashExpenses;
          do {
            cashExpenses = prompt('Во сколько это обойдется?')
          }
          while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
          appData.expenses[itemExpenses] = +cashExpenses;
          //console.log('appData.expense: ', appData);
        }
  },
  getExpensesMonth: function() {
    for (key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    console.log('Накопления за месяц:', appData.budgetMonth);

    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    console.log('Бюджет на день:', appData.budgetDay);

  },

  getTargetMonth: function() {
    let isTargeted = Math.ceil(appData.mission / appData.budgetMonth);
    //Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
    if (isTargeted > 0) {
      return('Ваша цель будет достигнута за ' + isTargeted + ' месяцев')
    }
    else return('Цель не будет достигнута');
  },

  getStatusIncome: function() {

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
    
  },

  getInfoDeposit: function() {
    if(appData.deposit) {
      do {
      appData.percentDeposit = prompt('Какой процент депозита?') }
      while (!isNumber(appData.percentDeposit) || isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
      do {
      appData.moneyDeposit = prompt('Какая сумма на балансе?') }
      while (!isNumber(appData.moneyDeposit) || isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
    }
  },
  

  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};
console.log('Цель заработать ' + appData.mission + ' рублей/долларов/гривен/юани');

//console.log('Ваш доход: ', money);
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log('Сумма всех расходов за месяц: ' + +appData.expensesMonth);

appData.getTargetMonth();
console.log(appData.getTargetMonth());
appData.getStatusIncome();
console.log(appData.getStatusIncome());
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());




  
  











