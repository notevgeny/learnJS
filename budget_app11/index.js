'use strict'

// Задание по проекту, получить каждый элемент в отдельную переменную:

// Кнопку "Рассчитать" через id
let getButton = document.getElementById('start');
console.log('getButton: ', getButton);

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector

let getCheckbox = document.querySelector('#deposit-check');
console.log('getCheckbox: ', getCheckbox);

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll

let getInputs = document.querySelectorAll('.additional_income-item');
console.log('getInputs: ', getInputs);

// Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let additionalExpensesItem = document.querySelector('.additional_expenses-item');

// Оставшиеся поля через querySelector каждый в отдельную переменную: поля ввода (input) с левой стороны и не забудьте про range.
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let inputIncomeTitle = document.querySelector('input.income-title');
let inputExpensesTitle = document.querySelector('input.expenses-title');
let incomeAmount = document.querySelector('.income-amount');
let addIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let expensesAmount = document.querySelector('.expenses-amount');

let addExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let incomeItems = document.querySelectorAll('.income-items');

let periodAmount = document.querySelector('.period-amount');
// let getPlaceholder = document.querySelector('input').getAttribute('placeholder');
let getNumPlaceholder = [...document.querySelectorAll('[placeholder = "Сумма"]')];
let getSymbolPlaceholder = [...document.querySelectorAll('[placeholder = "Наименование"]')];





// document.addEventListener("DOMContentLoaded", function(){
//  getButton.disabled = true;
// });


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function() {

   // if (salaryAmount.value === '') {
   //  alert('Ошибка. Поле "Месячный доход" должно быть заполнено!');
   //  return;
   // }

   appData.budget = +salaryAmount.value;
   appData.getExpenses();
   appData.getIncome();
   appData.getExpensesMonth();
   appData.getBudget();
   appData.getAddExpenses();
   appData.getAddIncome();

   appData.showResult();

  },

  showResult: function() {
   budgetMonthValue.value = appData.budgetMonth;
   budgetDayValue.value = appData.budgetDay;
   expensesMonthValue.value = appData.expensesMonth;
   additionalExpensesValue.value = appData.addExpenses.join(', ');
   addIncomeValue.value = appData.addIncome.join(', ');
   targetMonthValue.value = Math.ceil(appData.getTargetMonth());


   incomePeriodValue.value = appData.calcSavedMoney();
  },



  addExpensesBlock: function() {

   let cloneExpensesItem = expensesItems[0].cloneNode(true);
   //получаем объекты и обнуляем у них значения
   let expensesVal1 = cloneExpensesItem.querySelector('.expenses-title').value = '';
   let expensesVal2 = cloneExpensesItem.querySelector('.expenses-amount').value = '';
   //снова получаем объект, который добавили
   let expensesNumInput = cloneExpensesItem.querySelector('.expenses-amount');
   // навешиваем обработчик проверки на число
   expensesNumInput.addEventListener('input', appData.checkInputNum);

   let expensesSymbolInput = cloneExpensesItem.querySelector('.expenses-title');
   console.log('expensesSymbolInput: ', expensesSymbolInput);
   expensesSymbolInput.addEventListener('input', appData.checkInputSymbol);


   expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
   expensesItems = document.querySelectorAll('.expenses-items');
   if (expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
   }
  },

  addIncomeBlock: function() {
   let cloneIncomeItem = incomeItems[0].cloneNode(true);
   let incomeVal1 = cloneIncomeItem.querySelector('.income-title').value = '';
   let incomeVal2 = cloneIncomeItem.querySelector('.income-amount').value = '';

   let incomeNumInput = cloneIncomeItem.querySelector('.income-amount');
   incomeNumInput.addEventListener('input', appData.checkInputNum);

   let incomeSymbolInput = cloneIncomeItem.querySelector('.income-title');
   incomeSymbolInput.addEventListener('input', appData.checkInputSymbol);

   incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
   incomeItems = document.querySelectorAll('.income-items');

   if (incomeItems.length === 3) {
    incomePlus.style.display = 'none';
   }
  },

  changePeriodBlock: function() {
   periodAmount.innerHTML = periodSelect.value;
   incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
  },

  enableBtn: function() {
   if (salaryAmount.value !== '') {
    getButton.disabled = false;
   }
   else getButton.disabled = true;
  },

  getExpenses: function() {
   expensesItems.forEach(function(item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
     appData.expenses[itemExpenses] = cashExpenses;
    }
   });
  },


  getIncome: function(){
   incomeItems.forEach(function(item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
     appData.income[itemIncome] = cashIncome;
    }
    for (let key in appData.income) {
     appData.incomeMonth += +appData.income[key];
    }
   });
  },

  // проверка на число в инпуте
  checkInputNum: function(){
    if (getNumPlaceholder) {
      this.value = this.value.replace(/[\D]/g, '');
    }
    else return;
  },

  // проверка на русские символы и знаки препинания
  checkInputSymbol: function(){
    if (getSymbolPlaceholder) {
      this.value = this.value.replace(/[^\W]/ig, '');
    }
    else return;
  },


  getAddExpenses: function(){
   let addExpenses = additionalExpensesItem.value.split(',');
   addExpenses.forEach(function(item){
    item = item.trim();
    if (item !== '') {
     appData.addExpenses.push(item);
    }
   })
  },
  getAddIncome: function() {
   addIncomeItem.forEach(function(item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
     appData.addIncome.push(itemValue);
    }
   })

  },

  getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  getBudget: function() {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    console.log('Накопления за месяц:', appData.budgetMonth);

    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    console.log('Бюджет на день:', appData.budgetDay);

  },

  getTargetMonth: function() {
    return targetAmount.value / appData.budgetMonth
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
  
// возвращаем значение периода в поле
  calcSavedMoney: function() {
    return appData.budgetMonth * periodSelect.value;
  }
};



start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changePeriodBlock);
salaryAmount.addEventListener('input', appData.enableBtn);

salaryAmount.addEventListener('input', appData.checkInputNum);
targetAmount.addEventListener('input', appData.checkInputNum);
incomeAmount.addEventListener('input', appData.checkInputNum);
expensesAmount.addEventListener('input', appData.checkInputNum);

addIncomeItem[0].addEventListener('input', appData.checkInputSymbol);
addIncomeItem[1].addEventListener('input', appData.checkInputSymbol);


inputIncomeTitle.addEventListener('input', appData.checkInputSymbol);

inputExpensesTitle.addEventListener('input', appData.checkInputSymbol);




  //Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
  if (appData.getTargetMonth > 0) {
   console.log('Ваша цель будет достигнута за ' + isTargeted + ' месяцев');
 }
 else console.log('Цель не будет достигнута');


appData.getStatusIncome();
appData.getInfoDeposit();






