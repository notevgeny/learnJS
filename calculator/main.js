
document.addEventListener('DOMContentLoaded', function () {

'use strict';


 // Timer
function countTimer(deadline) {
 let timerHours = document.querySelector('#timer-hours'),
     timerMinutes = document.querySelector('#timer-minutes'),
     timerSeconds = document.querySelector('#timer-seconds');


 function getTimeRemaining() { 
  let dateStop = new Date(deadline).getTime(),
     dateNow = new Date().getTime(),
     timeRemaining = (dateStop - dateNow) / 1000,
     seconds = Math.floor(timeRemaining % 60),
     minutes = Math.floor((timeRemaining / 60) % 60),
     hours = Math.floor(timeRemaining / 3600) % 24;
     //days =  Math.floor(timeRemaining / 3600 / 24) ; 
     return {timeRemaining, hours, minutes, seconds}
 }


 function getZero(num){
	if (num >= 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}


 function updateClock() {

  let timer = getTimeRemaining(deadline);

  timerHours.textContent = getZero(timer.hours);
  timerMinutes.textContent = getZero(timer.minutes);
  timerSeconds.textContent = getZero(timer.seconds);

  if(timer.timeRemaining <= 0) {
//    setTimeout(updateClock, 1000);

    clearInterval(timeinterval);
    timerHours.textContent = getZero(0),
    timerMinutes.textContent = getZero(0),
    timerSeconds.textContent = getZero(0);
    let deadline = new Date(Date.parse(new Date()) + 1000*3600*24);
    countTimer(deadline);
    
  }
  
}

let timeinterval = setInterval(updateClock, 1000);

}

let deadline = new Date('18 february 2020 12:00');
countTimer(deadline);

 });