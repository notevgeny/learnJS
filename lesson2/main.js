let money = 2000,
    income = 'Стрижка овец', 
    addExpenses = 'Ножницы, Овца', 
    deposit = true, 
    mission = 50, 
    period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');


//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(','));


let budgetDay = money/30;
console.log(budgetDay);

