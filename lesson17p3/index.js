'use strict'


let round = document.querySelector('.round'),
    start = document.querySelector('.start'),
    reset = document.querySelector('.reset'),
    count1 = 0, count2 = 0,
    flyInterval;


let flyAnimate = function roundDown() {
 flyInterval = requestAnimationFrame(flyAnimate);
 count1++;
 if (count1 < 300) {
  round.style.top = count1 + 'px';
 }
 else {
  count2++;
  if (count2 < 1000) {
   round.style.left = count2 + 'px';
  }
  else cancelAnimationFrame(flyInterval);
 }

};
let animate = false;
start.addEventListener('click', function () {
 if (animate) {
 flyInterval = requestAnimationFrame(flyAnimate);
 animate = false;}
 else {(animate = true);
 cancelAnimationFrame(flyInterval)}
});
reset.addEventListener('click', function () {
 round.style.top = '';
 round.style.left = '';
 count1 = 0;
 count2 = 0;
  })

