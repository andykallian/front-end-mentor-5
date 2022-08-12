const id = document.querySelector('.id')
const adv = document.querySelector('.advice')
const newAdv = document.querySelector('#btn-dice')

const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        id.innerText = 'Advice #' + data.slip.id;
        adv.innerText = `"${data.slip.advice}"`;
    });
};


