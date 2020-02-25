document.addEventListener('DOMContentLoaded', function () {

  'use strict';
  
  
   // Timer
  function countTimer(endtime) {
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds');
  
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

  

 // меню
 const toggleMenu = () =>{
   

  const buttonMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeButton = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

//   const handlerMenu = () => {
//     menu.classList.toggle('active-menu');
//   }

//     buttonMenu.addEventListener('click', handlerMenu);
//     closeButton.addEventListener('click', handlerMenu);
  
//   menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu))


//  };
  // усложненное задание №19
  document.addEventListener('click', () => {
    let target = event.target;
    target = target.closest('.menu');  
    if (target === buttonMenu){
      menu.classList.add('active-menu');
    } 
    else {
      let target = event.target;
    if (target.closest('menu')){
        if (target.closest('.close-btn')){
          menu.classList.remove('active-menu');
        }
      else {
        if (target.closest('a')){
          menu.classList.remove('active-menu');
        }
      }
    }
    else menu.classList.remove('active-menu');
  }
  });


// обязательное задание
  // buttonMenu.addEventListener('click', () => {
  //   let menuShow = menu.classList.add('active-menu');
  // });

  // menu.addEventListener('click', (event) => {
  //   let target = event.target;
  //   if (target.classList.contains('close-btn')){
  //     menu.classList.remove('active-menu');
  //   }
  //   else if(target.closest('a')){
  //     menu.classList.remove('active-menu');
  // }



 };


  toggleMenu();


  // модальное окно

  function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupContent = document.querySelector('.popup-content'),
          popupButton = document.querySelectorAll('.popup-btn');

    popupButton.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        
        let count = 0;

        let flyInterval;

        let flyAnimate = function() {
          if (window.innerWidth > 768) {
            flyInterval = requestAnimationFrame(flyAnimate);
            count++;
            if (count < 25){
              popupContent.style.top = 0;
              popupContent.style.top = count * 4.5 + 'px';
            }
            else {
              cancelAnimationFrame(flyInterval);
            }
          }
      
      }
        flyInterval = requestAnimationFrame(flyAnimate);

      });
    });

    popup.addEventListener('click', (event) =>{
      let target = event.target;

      if (target.classList.contains('popup-close')){
        popup.style.display = 'none';
      } 
      
      else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };

  togglePopup();

  // плавный скролл

  const anchors = document.querySelectorAll('a[href*="#"]')

  anchors.forEach((elem) => {
    elem.addEventListener('click', function (item) {
      item.preventDefault();
      const blockID = elem.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++){
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }
        else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    }


    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
          // если target соответсвует этому классу, то берется этот селектор, выполняется if, если нет - поднимается выше, к родителю и проверяет там
          // возвращает null, если не нашел соотв селектор
          target = target.closest('.service-header-tab');

      if (target){
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
 
      }
    })
    
  };

  tabs();


// добавление точек в слайдер

const addDots = () => {
  const sliderDots = [...document.querySelectorAll('.portfolio-item')].length;
  const portfolioDots = document.querySelector('.portfolio-dots');
  let item = [];
  for (let i = 0; i < sliderDots; i++) {
    item[i] = document.createElement('li');
    item[i].classList.add('dot');
    item[0].classList.add('dot-active');
    portfolioDots.appendChild(item[i]);
  }

}

addDots();

  // слайдер
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
          dots = document.querySelectorAll('.dot'),
          slider = document.querySelector('.portfolio-content');
  
    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
      
    };
  
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')){
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')){
        currentSlide++;
      }
      else if (target.matches('#arrow-left')){
        currentSlide--;
      } else if (target.matches('.dot')){
        dots.forEach((elem, index) => {
          if (elem === target){
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length){
        currentSlide = 0;
      }
      else if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) =>{
      if(event.target.matches('.portfolio-btn') || 
      event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) =>{
      if(event.target.matches('.portfolio-btn') || 
      event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(3000);
  };
  slider();


  //перестановка фотографий в Наша команда

  const ourTeam = document.getElementById('command'),
        ourTeamImgs = ourTeam.querySelectorAll('img.command__photo');
        console.log('comandImgs: ', ourTeamImgs);

        ourTeamImgs.forEach((elem) => {
          
          elem.addEventListener('mouseenter', (e) => {
            let originImg = event.target.src;
            event.target.src = event.target.dataset.img;

            elem.addEventListener('mouseleave', (e) => {
              event.target.src = originImg;
          });
          
          });
        })


  // проверка полей калькулятора на число

  const calcSquare = document.querySelectorAll('.calc-num');
  calcSquare.forEach((elem) => {
    elem.addEventListener('input', () => {
    elem.value = elem.value.replace(/[\D]/g, '');
    });
  });



});


