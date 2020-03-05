const sendForm = () => {
 const errorMessage = 'Что-то пошло не так...',
       loadMessage = 'Загрузка...',
       successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

 const statusMessage = document.createElement('div');
 statusMessage.style.cssText = 'font-size: 2rem;';

 document.addEventListener('input', (event) => {

   const checkInputText = (target) => {
     target.value = target.value.replace(/[^а-яё\s]/ig, '');
   }

   const checkInputPhone = (target) => {
     target.value = target.value.replace(/[^\d\+]/g, '');
   }

   let target = event.target;

   if (target.closest('.form-name')) {
     checkInputText(target);
   }

   if (target.closest('.form-email')) {
   }

   if (target.closest('.form-phone')) {
     checkInputPhone(target);

   }

   if (target.closest('.mess')) {
     checkInputText(target);
   }
});

   document.addEventListener('submit', (event) => { 
   const target = event.target;
   event.preventDefault();

   if (
     (target.querySelector('#'+target.id+'-name').value === '') || (target.querySelector('#'+target.id+'-email').value === '')
     || target.querySelector('#'+target.id+'-phone').value === '')  
     {
       alert('Заполни все поля формы');
       return;
     } 

     else
       if (target.querySelector('#'+target.id+'-message')) {      

         if (target.querySelector('#'+target.id+'-message').value === '') {
           alert('Совсем чуть-чуть осталось! Заполни все поля формы');
           return
         }
       }
   

   target.appendChild(statusMessage);
   statusMessage.textContent = loadMessage;
   const formData = new FormData(target);
   let body = {};

   formData.forEach((val, key) => {
     body[key] = val;
   });

   const deleteInputs = () => {
   const target = event.target; 
   target.querySelector('#'+target.id+'-name').value = '';
   target.querySelector('#'+target.id+'-email').value = '';
   target.querySelector('#'+target.id+'-phone').value = '';
   (target.querySelector('#'+target.id+'-message')) ? target.querySelector('#'+target.id+'-message').value = '': null;
   };

postData(body)
.then(response => {
 if (response.status !== 200) {
   throw new Error('Status network was not 200');
 }
 statusMessage.textContent = successMessage;
 deleteInputs();
})
.catch(error => {
 statusMessage.textContent = errorMessage;
 console.error(error);
 deleteInputs();
});
});
const postData = (body) => {

return fetch('./server.php', {
 method: 'POST',
 mode: 'same-origin',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(body)
});

};
};


export default sendForm;