'use strict'
let button = document.getElementById('change');
let wrapper = document.querySelector('.wrapper');
let header = document.getElementById('color');

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