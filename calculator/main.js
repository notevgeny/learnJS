document.addEventListener('DOMContentLoaded', function () {

  'use strict';
  
  
   // Timer
  function countTimer(endtime) {
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds');
  console.log(endtime);
  
   function getTimeRemaining() { 
    let dateStop = new Date(endtime).getTime(),
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
 
    let timer = getTimeRemaining();
  
  
    if (timer.timeRemaining <= 0) {
      clearInterval(timeinterval);
      
    let dateStop = new Date(endtime).getTime();
    let dateNow = new Date().getTime();
    
    while (dateStop <= dateNow) {
      dateStop = dateStop + 24 * 60 * 60 * 1000;
    }
    let deadline = new Date(dateStop);
    countTimer(deadline);
  }
  else {
    timerHours.textContent = getZero(timer.hours);
    timerMinutes.textContent = getZero(timer.minutes);
    timerSeconds.textContent = getZero(timer.seconds);
  }
    }
  
  let timeinterval = setInterval(updateClock, 1000);
  
  }
  
  let deadline = new Date('18 february 2020');
  countTimer(deadline);
  
   });