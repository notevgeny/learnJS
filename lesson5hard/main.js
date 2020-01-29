'use strict'
/*1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
*/

let arr = [],
    sum = [],
    sum2 = [];

let showTwoFour = function () {
  for (let i = 0; i < 7; i++) {
    arr[i] = prompt('Введите любое многозначное число', '20');
    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
      sum[i] = arr[i];
      sum2 = sum.filter(element => element !== null);
    }
}
console.log(sum2);
};

showTwoFour();
/*
2) Вывести в столбик все простые числа от 1 до 100
— Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”*/

let getPrimeNumbers = function () {
  let n = 100;
  doAgain:
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue doAgain;
    }
    console.log('Простое число: ' + i + '. Его множители: ' + 1 + ' и ' + i);
  }
};
getPrimeNumbers();


