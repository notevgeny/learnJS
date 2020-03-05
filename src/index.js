'use strict';

import countTimer from './modules/countTimer';
import addDots from './modules/addDots';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import smoothScroll from './modules/smoothScroll';
import ourTeam from './modules/ourTeam';
import checkNum from './modules/checkNum';

  
// Timer
countTimer('18 february 2020');
// меню
toggleMenu();
// модальное окно
togglePopup();
//плавный скролл
smoothScroll();
// Табы
tabs();
// добавление точек в слайдер
addDots();
// слайдер
slider();
// калькулятор
calculator(100);
//проверка полей калькулятора на цифры
checkNum();
// send-ajax-form
sendForm();
// переворот картинок в блоке команды
ourTeam();

