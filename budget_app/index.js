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

let getValueClass1 = document.getElementsByClassName('budget_day-value');
console.log('getValueClass1: ', getValueClass1);
let getValueClass2 = document.getElementsByClassName('expenses_month-value')
console.log('getValueClass2: ', getValueClass2);
let getValueClass3 = document.getElementsByClassName('additional_income-value')
console.log('getValueClass3: ', getValueClass3);
let getValueClass4 = document.getElementsByClassName('additional_expenses-value')
console.log('getValueClass4: ', getValueClass4);
let getValueClass5 = document.getElementsByClassName('income_period-value')
console.log('getValueClass5: ', getValueClass5);
let getValueClass6 = document.getElementsByClassName('target_month-value')
console.log('getValueClass6: ', getValueClass6);

// Оставшиеся поля через querySelector каждый в отдельную переменную: поля ввода (input) с левой стороны и не забудьте про range.
let getValueInput1 = document.querySelector('input.salary-amount');
console.log('getValueInput1: ', getValueInput1);
let getValueInput2 = document.querySelector('input.income-title');
console.log('getValueInput2: ', getValueInput2);
let getValueInput3 = document.querySelector('input.income-amount');
console.log('getValueInput3: ', getValueInput3);
let getValueInput4 = document.querySelector('input.additional_income-item');
console.log('getValueInput4: ', getValueInput4);
let getValueInput5 = document.querySelector('input.expenses-title');
console.log('getValueInput5: ', getValueInput5);
let getValueInput6 = document.querySelector('input.expenses-amount');
console.log('getValueInput6: ', getValueInput6);
let getValueInput7 = document.querySelector('input.additional_expenses-item ');
console.log('getValueInput7: ', getValueInput7);
let getValueInput8 = document.querySelector('input.deposit-amount');
console.log('getValueInput8: ', getValueInput8);
let getValueInput9 = document.querySelector('input.deposit-percent');
console.log('getValueInput9: ', getValueInput9);
let getValueInput10 = document.querySelector('input.target-amount');
console.log('getValueInput10: ', getValueInput10);
let getValueInput11 = document.querySelector('input.period-select');
console.log('getValueInput11: ', getValueInput11);








