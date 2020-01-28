'use strict'

/*Создайте функцию, которая принимает 1 аргумент (название произвольное)

— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)*/

let input = '   любые данные больше тридцати символов   ',
    maxLength = 30,
    my = input.length;
    
   console.log('input typeof: ', typeof(input));
   console.log('my: ', my);



function truncate(str, maxLength) {
  return (my > maxLength) ?
    str.slice(0, maxLength-2) + '…' : str;
}

let getString = function(element) {
  if (typeof(element) == 'string') {
    //console.log('Да, я строка');
    let trimmered = element.trim();
    console.log('Подрезанная строка: ', trimmered);
    console.log('Строка с многоточием (или без):', truncate(trimmered, maxLength));
  }
  else {
    alert('Братишка, ты ввел не строку');
  }
}

getString(input);
