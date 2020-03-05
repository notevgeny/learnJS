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


export default togglePopup;