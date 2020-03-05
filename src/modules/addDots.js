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

export default addDots;