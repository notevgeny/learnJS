
//1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

/*2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
Правильно использовать цикл или методы перебора.*/
let number = eval(num.toString().split('').join('*'));
console.log(number);

//альтернативный и более прямой способ
let numstr = num.toString().split('');
let number1 = numstr[0]*numstr[1]*numstr[2]*numstr[3]*numstr[4]*numstr[5];
console.log(number1);

//3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let summary = number ** 3;
console.log('summary: ', summary);

//4) Вывести на экран первые 2 цифры полученного числа
console.log(+(summary.toString().slice(0, 2)));


