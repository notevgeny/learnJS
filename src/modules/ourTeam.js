//перестановка фотографий в Наша команда

const ourTeam = () => {

const ourTeam = document.getElementById('command'),
ourTeamImgs = ourTeam.querySelectorAll('img.command__photo');

ourTeamImgs.forEach((elem) => {
  
  elem.addEventListener('mouseenter', (e) => {
    let originImg = event.target.src;
    event.target.src = event.target.dataset.img;

    elem.addEventListener('mouseleave', (e) => {
      event.target.src = originImg;
  });
  
  });
})
};

export default ourTeam;