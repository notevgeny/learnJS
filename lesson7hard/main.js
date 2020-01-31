'use srict';

/*

1) Создать массив week и записать в него дни недели в виде строк

·        Вывести на экран все дни недели

·        Каждый из них с новой строчки

·        Выходные дни - курсивом

·        Текущий день - жирным шрифтом(использовать объект даты)



*/ 

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(week);

// Вызов для каждого элемента
week.forEach(function(item, i, array) {
  console.log(item);
});

for (let i = week.length - 2; i < week.length; i++) {
  console.log(week[i].italics()) 
}

let date = new Date(2019, 1, 1);
console.log( week[date.getDay()].bold() );


