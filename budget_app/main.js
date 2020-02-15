'use strict'

let getButton = document.getElementById('start');
let resetButton = document.getElementById('cancel');

let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

let getCheckbox = document.querySelector('#deposit-check');

let getInputs = document.querySelectorAll('.additional_income-item');

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let additionalExpensesItem = document.querySelector('.additional_expenses-item');

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
let getNumPlaceholder = [...document.querySelectorAll('[placeholder = "Сумма"]')];
let getSymbolPlaceholder = [...document.querySelectorAll('[placeholder = "Наименование"]')];

// берем отсюда первые 11 полей input - это все input слева
let readOnly = document.querySelectorAll('input[type="text"]');

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

const AppData = function () {

 this.income = {};
 this.incomeMonth = 0;
 this.addIncome = [];
 this.expenses = {};
 this.addExpenses = [];
 this.deposit = false;
 this.budget = 0;
 this.budgetDay = 0;
 this.budgetMonth = 0;
 this.expensesMonth = 0;
 this.percentDeposit = 0;
 this.moneyDeposit = 0;
}

AppData.prototype.enableBtn = function() {
 if (salaryAmount.value !== '') {
  getButton.disabled = false;
 }
 else getButton.disabled = true;
};

AppData.prototype.start = function() {

 this.budget = +salaryAmount.value;
 this.getExpenses();
 this.getIncome();
 this.getExpensesMonth();
 this.getBudget();
 this.getAddExpenses();
 this.getAddIncome();

 this.showResult();

};

AppData.prototype.showResult = function() {
 budgetMonthValue.value = this.budgetMonth;
 budgetDayValue.value = this.budgetDay;
 expensesMonthValue.value = this.expensesMonth;
 additionalExpensesValue.value = this.addExpenses.join(', ');
 addIncomeValue.value = this.addIncome.join(', ');
 targetMonthValue.value = Math.ceil(this.getTargetMonth());

 incomePeriodValue.value = this.calcSavedMoney();
};



AppData.prototype.addExpensesBlock = function() {

 let cloneExpensesItem = expensesItems[0].cloneNode(true);
 //получаем объекты и обнуляем у них значения
 let expensesVal1 = cloneExpensesItem.querySelector('.expenses-title');
 let expensesVal2 = cloneExpensesItem.querySelector('.expenses-amount');
 expensesVal1.value = '';
 expensesVal2.value = '';
 
 expensesVal2.addEventListener('input', this.checkInputNum);
 expensesVal1.addEventListener('input', this.checkInputSymbol);

 expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
 expensesItems = document.querySelectorAll('.expenses-items');

 if (expensesItems.length === 3) {
  expensesPlus.style.display = 'none';
 }
};

AppData.prototype.addIncomeBlock = function() {
 let cloneIncomeItem = incomeItems[0].cloneNode(true);
 let incomeVal3 = cloneIncomeItem.querySelector('.income-title');
 let incomeVal4 = cloneIncomeItem.querySelector('.income-amount');
 incomeVal3.value = '';
 incomeVal4.value = '';

 incomeVal4.addEventListener('input', this.checkInputNum);
 incomeVal3.addEventListener('input', this.checkInputSymbol);

 incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
 incomeItems = document.querySelectorAll('.income-items');

 if (incomeItems.length === 3) {
  incomePlus.style.display = 'none';
 }
};

AppData.prototype.changePeriodBlock = function() {
 periodAmount.innerHTML = periodSelect.value;
 incomePeriodValue.value = periodSelect.value * this.budgetMonth;
};

AppData.prototype.getExpenses = function() {
 expensesItems.forEach((item)=> {
  let itemExpenses = item.querySelector('.expenses-title').value;
  let cashExpenses = item.querySelector('.expenses-amount').value;
  if (itemExpenses !== '' && cashExpenses !== '') {
   this.expenses[itemExpenses] = cashExpenses;
  }
 });
};

AppData.prototype.getIncome = function(){
  let addAmount = 0;
 incomeItems.forEach((item)=> {
  let itemIncome = item.querySelector('.income-title').value;
  let cashIncome = item.querySelector('.income-amount').value;
  if (itemIncome !== '' && cashIncome !== '') {
   this.income[itemIncome] = cashIncome;
   this.incomeMonth += +cashIncome;
  }
 });
};

// проверка на число в инпуте
AppData.prototype.checkInputNum = function(){
  if (getNumPlaceholder) {
    this.value = this.value.replace(/[\D]/g, '');
  }
  else return;
};

// проверка на русские символы и знаки препинания
AppData.prototype.checkInputSymbol = function(){
  if (getSymbolPlaceholder) {
    this.value = this.value.replace(/[^\W]/ig, '');
  }
  else return;
};


AppData.prototype.getAddExpenses = function(){
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach((item)=>{
   item = item.trim();
   if (item !== '') {
    this.addExpenses.push(item);
   }
  })
 };


AppData.prototype.getAddIncome = function() {
 addIncomeItem.forEach((item)=> {
  let itemValue = item.value.trim();
  if (itemValue !== '') {
   this.addIncome.push(itemValue);
  }
 })

};

AppData.prototype.getExpensesMonth = function() {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};

AppData.prototype.getBudget = function() {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  console.log('Накопления за месяц:', this.budgetMonth);

  this.budgetDay = Math.floor(this.budgetMonth / 30);
  console.log('Бюджет на день:', this.budgetDay);

};

AppData.prototype.getTargetMonth = function() {
  return targetAmount.value / this.budgetMonth
};

AppData.prototype.getStatusIncome = function() {

  if (this.budgetDay > 1200) {
    return('У вас высокий уровень дохода');
  } 
  else if (1200 > this.budgetDay && this.budgetDay > 600) {
    return('У вас средний уровень дохода');
  }
  else if (600 > this.budgetDay && this.budgetDay > 0) {
    return('К сожалению у вас уровень дохода ниже среднего');
  } 
  else if (0 > this.budgetDay) {
   return('Что то пошло не так');
  };
  
};

AppData.prototype.getInfoDeposit = function() {
  if(this.deposit) {
    do {
    this.percentDeposit = prompt('Какой процент депозита?') }
    while (!isNumber(this.percentDeposit) || isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);
    do {
    this.moneyDeposit = prompt('Какая сумма на балансе?') }
    while (!isNumber(this.moneyDeposit) || isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
  }
};

// возвращаем значение периода в поле
AppData.prototype.calcSavedMoney = function() {
  return this.budgetMonth * periodSelect.value;
};

AppData.prototype.disableInputs = function() {
  for (let i = 0; i < 11; i++) {
    readOnly[i].setAttribute("readonly", "readonly"); 
  }
  getButton = document.getElementById('start');
  getButton.style.display = 'none';
  resetButton.style.display = 'block';
  resetButton.addEventListener('click', this.resetAll);

 };

 AppData.prototype.resetAll = function() {
  location.reload();
};

AppData.prototype.eventsListeners = function() {
 start.addEventListener('click', appData.start.bind(appData));
 start.addEventListener('click', appData.disableInputs.bind(appData));
 
 expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
 incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));
 periodSelect.addEventListener('input', appData.changePeriodBlock.bind(appData));
 salaryAmount.addEventListener('input', appData.enableBtn);
 
 salaryAmount.addEventListener('input', appData.checkInputNum);
 targetAmount.addEventListener('input', appData.checkInputNum);
 incomeAmount.addEventListener('input', appData.checkInputNum);
 expensesAmount.addEventListener('input', appData.checkInputNum);
 
 addIncomeItem[0].addEventListener('input', appData.checkInputSymbol);
 addIncomeItem[1].addEventListener('input', appData.checkInputSymbol);
 
 inputIncomeTitle.addEventListener('input', appData.checkInputSymbol);
 inputExpensesTitle.addEventListener('input', appData.checkInputSymbol);
 
 if (appData.getTargetMonth > 0) {
    console.log('Ваша цель будет достигнута за ' + isTargeted + ' месяцев');
 }
  else console.log('Цель не будет достигнута');
 
 
 appData.getStatusIncome();
 appData.getInfoDeposit();
};


const appData = new AppData();
console.log(appData);


const eventsListeners = new AppData();
eventsListeners.eventsListeners();




