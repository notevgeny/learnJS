'use strict'


// Задание по проекту, получить каждый элемент в отдельную переменную:




// Кнопку "Рассчитать" через id
let getButton = document.getElementById('start');
console.log('getButton: ', getButton);


// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let getTag1 = document.getElementsByTagName('button')[0];
console.log('getTag1: ', getTag1);
let getTag2 = document.getElementsByTagName('button')[1];
console.log('getTag2: ', getTag2);


// Чекбокс по id через querySelector

let getCheckbox = document.querySelector('#deposit-check');
console.log('getCheckbox: ', getCheckbox);


// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll

let getInputs = document.querySelectorAll('.additional_income-item');
console.log('getInputs: ', getInputs);

// Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">

let getBudgetDayValue = document.querySelector('.budget_day-value');
console.log('getBudgetDayValue: ', getBudgetDayValue);
let getExpensesMonthValue = document.querySelector('.expenses_month-value')
console.log('getExpensesMonthValue: ', getExpensesMonthValue);
let getAddIncomeValue = document.querySelector('.additional_income-value')
console.log('getAddIncomeValue: ', getAddIncomeValue);
let getAdditionalExpensesValue = document.querySelector('.additional_expenses-value')
console.log('getAdditionalExpensesValue: ', getAdditionalExpensesValue);
let getIncomePeriodValue = document.querySelector('.income_period-value')
console.log('getIncomePeriodValue: ', getIncomePeriodValue);
let getTargetMonthValue = document.querySelector('.target_month-value')
console.log('getTargetMonthValue: ', getTargetMonthValue);

// Оставшиеся поля через querySelector каждый в отдельную переменную: поля ввода (input) с левой стороны и не забудьте про range.
let getSalaryAmount = document.querySelector('input.salary-amount');
console.log('getSalaryAmount: ', getSalaryAmount);
let getIncomeTitle = document.querySelector('input.income-title');
console.log('getIncomeTitle: ', getIncomeTitle);
let getIncomeAmount = document.querySelector('input.income-amount');
console.log('getIncomeAmount: ', getIncomeAmount);
let getAddIncomeItem = document.querySelector('input.additional_income-item');
console.log('getAddIncomeItem: ', getAddIncomeItem);
let getExpensesTitle = document.querySelector('input.expenses-title');
console.log('getExpensesTitle: ', getExpensesTitle);
let getExpensesAmount = document.querySelector('input.expenses-amount');
console.log('getExpensesAmount: ', getExpensesAmount);
let getAddExpensesItem = document.querySelector('input.additional_expenses-item ');
console.log('getAddExpensesItem: ', getAddExpensesItem);
let getDepositAmount = document.querySelector('input.deposit-amount');
console.log('getDepositAmount: ', getDepositAmount);
let getDepositPercent = document.querySelector('input.deposit-percent');
console.log('getDepositPercent: ', getDepositPercent);
let getTargetAmount = document.querySelector('input.target-amount');
console.log('getTargetAmount: ', getTargetAmount);
let getPeriodSelect = document.querySelector('input.period-select');
console.log('getPeriodSelect: ', getPeriodSelect);








