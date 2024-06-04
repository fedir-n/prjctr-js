'use strict';

//HOMEWORK10

// Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом

document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.btn');
  const body = document.querySelector('body');
  const text = document.querySelector('.text');

  let isTurnedOn = (localStorage.getItem('isTurnedOn') !== 'false') ? true : false;

  button.addEventListener('click', changeElements);
  
  uploadCurrentVersion();

  function uploadCurrentVersion () {
    changeBackground();
    changeButtonText();
    setTime();
  };

  function changeElements () {
    isTurnedOn = !isTurnedOn;
    localStorage.setItem('isTurnedOn', isTurnedOn);
   
    changeBackground();
    changeButtonText();
    changeTime();
    setTime();
  } 

  function changeBackground () {
    body.classList.toggle('dark-background', !isTurnedOn);
  };

  function changeButtonText () {
    isTurnedOn ? button.textContent = 'Turn off': button.textContent = 'Turn on';
  };

  function changeTime () {
    //{DD-MM-YYYY HH:MM:SS}
    const date = new Date;
    const lastTurnOnDate = date
      .toISOString()
      .replace('T',' ')
      .slice(0, -4);    
    isTurnedOn && (localStorage.setItem('lastTurnOnTime', lastTurnOnDate));
  };

  function setTime () {
    const lastTurnOnDate = localStorage.getItem('lastTurnOnTime');
    lastTurnOnDate !== null && (text.textContent = `Last turn on time: ${lastTurnOnDate}`);
  };

});