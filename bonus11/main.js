'use strict'
let button = document.getElementById('change');
console.log('button: ', button);
let wrapper = document.querySelector('.wrapper');
let header = document.getElementById('color');
console.log('header: ', header);

function getRandomColor() {
 let letters = '0123456789ABCDEF';
 let color = '#';
 for (let i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

function setRandomColor(){
 wrapper.style.backgroundColor = getRandomColor();
 header.textContent = getRandomColor();

}

button.addEventListener('click', setRandomColor);