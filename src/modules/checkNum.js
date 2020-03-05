  // проверка полей калькулятора на число

  const checkNum = () => {

  const calcNum = document.querySelectorAll('.calc-num');
  calcNum.forEach((elem) => {
    elem.addEventListener('input', () => {
    elem.value = elem.value.replace(/[\D]/g, '');
    });
  });
}

  export default checkNum;