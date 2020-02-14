'use strict'

function DOMElement(selector, height, width, bg, fontSize){
 this.selector = selector, 
 this.height = height, 
 this.width = width, 
 this.bg = bg,
 this.fontSize = fontSize;
}

DOMElement.prototype.makeElement = function(str){
 let myElement;
 let myClass = this.selector.slice(1);
 if (this.selector[0] === '.') {
  myElement = document.createElement('div');
  myElement.classList.add(myClass);
  myElement.textContent = 'Любой текст, который находится внутри элемента div';
 }
 else if (this.selector[0] === '#') {
  myElement = document.createElement('p');
  myElement.id = myClass;
  myElement.textContent = 'Любой текст, который находится внутри параграфа';
 }
 else console.log('Ничего не произошло');

 document.body.appendChild(myElement);
 myElement.style.height = this.height;
 myElement.style.width = this.width;
 myElement.style.background = this.bg;
 myElement.style.fontSize = this.fontSize;
};

let DOMElementOne = new DOMElement('.bratishka', '200px', '30%', 'silver', '2rem');
let DOMElementTwo = new DOMElement('#bratishka', '100px', '70%', 'green', '1.2rem');


DOMElementOne.makeElement();
DOMElementTwo.makeElement();