'use strict'

let getButton = document.getElementById('start');
const resetButton = document.getElementById('cancel');

const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];

const getCheckbox = document.querySelector('#deposit-check');

let getInputs = document.querySelectorAll('.additional_income-item');

const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const additionalExpensesItem = document.querySelector('.additional_expenses-item');

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const inputIncomeTitle = document.querySelector('input.income-title');
const inputExpensesTitle = document.querySelector('input.expenses-title');
const incomeAmount = document.querySelector('.income-amount');
const addIncomeItem = document.querySelectorAll('.additional_income-item');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');

let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');

const addExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');


const periodAmount = document.querySelector('.period-amount');
const getNumPlaceholder = [...document.querySelectorAll('[placeholder = "Сумма"]')];
const getSymbolPlaceholder = [...document.querySelectorAll('[placeholder = "Наименование"]')];

// берем отсюда первые 11 полей input - это все input слева
const readOnly = document.querySelectorAll('input[type="text"]');

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

class AppData{
 constructor() {
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

 enableBtn() {
  if (salaryAmount.value !== '') {
   getButton.disabled = false;
  }
  else getButton.disabled = true;
 };
 start() {

  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getBudget();
  this.getAddExpenses();
  this.getAddIncome();
 
  this.showResult();
 
 };

 showResult() {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  addIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
 
  incomePeriodValue.value = this.calcSavedMoney();
 };

 addExpensesBlock() {

  const cloneExpensesItem = expensesItems[0].cloneNode(true);
  //получаем объекты и обнуляем у них значения
  const expensesVal1 = cloneExpensesItem.querySelector('.expenses-title');
  const expensesVal2 = cloneExpensesItem.querySelector('.expenses-amount');
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

 addIncomeBlock() {
  const cloneIncomeItem = incomeItems[0].cloneNode(true);
  const incomeVal3 = cloneIncomeItem.querySelector('.income-title');
  const incomeVal4 = cloneIncomeItem.querySelector('.income-amount');
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

 changePeriodBlock() {
  periodAmount.innerHTML = periodSelect.value;
  incomePeriodValue.value = periodSelect.value * this.budgetMonth;
 };

 getExpenses() {
  expensesItems.forEach((item)=> {
   let itemExpenses = item.querySelector('.expenses-title').value;
   let cashExpenses = item.querySelector('.expenses-amount').value;
   if (itemExpenses !== '' && cashExpenses !== '') {
    this.expenses[itemExpenses] = cashExpenses;
   }
  });
 };

 getIncome(){
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
checkInputNum(){
 if (getNumPlaceholder) {
   this.value = this.value.replace(/[\D]/g, '');
 }
 else return;
};

// проверка на русские символы и знаки препинания
checkInputSymbol(){
 if (getSymbolPlaceholder) {
   this.value = this.value.replace(/[^\W]/ig, '');
 }
 else return;
};

getAddExpenses(){
 const addExpenses = additionalExpensesItem.value.split(',');
 addExpenses.forEach((item) => {
  item = item.trim();
  if (item !== '') {
   this.addExpenses.push(item);
  }
 })
};

getAddIncome() {
 addIncomeItem.forEach((item) => {
  let itemValue = item.value.trim();
  if (itemValue !== '') {
   this.addIncome.push(itemValue);
  }
 })

};

getExpensesMonth() {
 for (let key in this.expenses) {
   this.expensesMonth += +this.expenses[key];
 }
};

getBudget() {
 this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
 console.log('Накопления за месяц:', this.budgetMonth);

 this.budgetDay = Math.floor(this.budgetMonth / 30);
 console.log('Бюджет на день:', this.budgetDay);

};

getTargetMonth() {
 if ((targetAmount.value / this.budgetMonth) > 0) {
 return targetAmount.value / this.budgetMonth }
 else { return 'NaN'}
};

getStatusIncome() {

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

getInfoDeposit() {
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
calcSavedMoney() {
 return this.budgetMonth * periodSelect.value;
};

disableInputs() {
 for (let i = 0; i < 11; i++) {
   readOnly[i].setAttribute("readonly", "readonly"); 
 }
 getButton = document.getElementById('start');
 getButton.style.display = 'none';
 resetButton.style.display = 'block';
 resetButton.addEventListener('click', this.resetAll);

};

resetAll() {
 location.reload();
};

}

class listenListeners extends AppData {
 eventsListeners() {
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
  
  appData.getStatusIncome();
  appData.getInfoDeposit();
 };
}




const appData = new AppData();
console.log(appData);


const eventsListeners = new listenListeners();
eventsListeners.eventsListeners();




