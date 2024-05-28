'use strict';

//HOMEWORK10




// В початковому стані — на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

// Після натиснення — на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn off: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення

// Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.


// Під кнопкою має з'явитись текстове повідомлення 'Last turn on: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення

// Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки (localStorage).

// Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом

document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.btn');
  const body = document.querySelector('body');
  const text = document.querySelector('.text');

  button.addEventListener('click', changeElements);
  
  let isTurnedOn = (localStorage.getItem('isTurnedOn') === 'true') ? true : false;

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
    let currentTime = new Date;
    isTurnedOn && (localStorage.setItem('lastTurnOnTime', currentTime));
  };

  function setTime () {
    let lastTurnOnDate = localStorage.getItem('lastTurnOnTime');
    lastTurnOnDate !== null && (text.textContent = `Last turn on time: ${lastTurnOnDate}`);
  };

});