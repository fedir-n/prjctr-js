'use strict';

//HOMEWORK10







// Під кнопкою має з'явитись текстове повідомлення 'Last turn off: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення

// Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.


// Під кнопкою має з'явитись текстове повідомлення 'Last turn on: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення

// Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки (localStorage).

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
    setTime ();
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
    isTurnedOn ? body.style.backgroundColor = 'rgb(255, 255, 255)': body.style.backgroundColor = 'rgb(21, 14, 14)';
  };

  function changeButtonText () {
    isTurnedOn ? button.textContent = 'Turn off': button.textContent = 'Turn on';
  };

  function changeTime () {
    //{DD-MM-YYYY HH:MM:SS}
    const date = new Date;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const lastTurnOnDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    
    isTurnedOn && (localStorage.setItem('lastTurnOnTime', lastTurnOnDate));
  };

  function setTime () {
    const lastTurnOnDate = localStorage.getItem('lastTurnOnTime');
    lastTurnOnDate !== null && (text.textContent = `Last turn on time: ${lastTurnOnDate}`);
  };

});