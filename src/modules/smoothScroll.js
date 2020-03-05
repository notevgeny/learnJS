  // плавный скролл
  const smoothScroll = () => {
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
};


  export default smoothScroll;