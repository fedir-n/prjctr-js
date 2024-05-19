'use strict';

//HOMEWORK7

//1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  

detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!

function detonatorTimer(delay) {
  let countdown = delay
  let myTimer = setInterval(() => {
    if (countdown > 0) {
      console.log(countdown);
      countdown--;
    } else {
      console.log("BOOM!");
      clearInterval(myTimer);
    };
  }, 1000);
};

//2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
detonatorTimer2(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer2(delay) {
  let countdown = delay;
  setTimeout(() => {
    if (countdown > 0) {
      console.log(countdown);
      countdown--;
      detonatorTimer(countdown);
    } else {
      console.log("BOOM!")
    }
  }, 1000)
};

//3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

let meme1 = {
  name: 'Booba',
  nickname: null,
  age: 33,
  gender: 'mechanic',
  memeUrl: 'https://www.tiktok.com/@ceoofmemes/video/7219370710001667334?lang=en',
  qa1 () {console.log(`-What is your gender ?\n-I'm a ${this.gender}`);},
  qa2 () {console.log(`${this.gender} ${this.gender}`);}
};

let meme2 = {
  name: 'Lester Green',
  nickname: 'Beetlejuice',
  age: 55,
  memeUrl: 'https://www.tiktok.com/@pimpbeetle/video/7239337820748369178?lang=en',
  answers: ['Nothing','Pffff','Me?','Just hanging around', 'Hehe-hehe'],
  randomAnswer () {console.log(this.answers[Math.floor(Math.random() * this.answers.length)]);},
  showName () {console.log(this.name);}
};

//4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту

let securedQA1 = meme1.qa1.bind(meme1);
let securedQA2 = meme1.qa2.bind(meme1);
let securedRandomAnswer = meme2.randomAnswer.bind(meme2);
let securedShowName = meme2.showName.bind(meme2);

setTimeout(securedQA1, 1000); 
setTimeout(securedQA2, 2000); 
setTimeout(securedRandomAnswer, 3000); 
setTimeout(securedShowName, 4000); 