const toggleMenu = () =>{
   

 const buttonMenu = document.querySelector('.menu'),
       menu = document.querySelector('menu'),
       closeButton = document.querySelector('.close-btn'),
       menuItems = menu.querySelectorAll('ul>li');

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
};

export default toggleMenu;