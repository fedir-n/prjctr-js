'use strict';

//HOMEWORK8

// //1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів

// const movies = [
// 	{
// 		movieName: 'The Thing',
// 		releaseYear: 1982,
// 		directedBy: 'Carpenter',
// 		runningTimeInMinutes: 109,
// 	},
// 	{
// 		movieName: 'Aliens',
// 		releaseYear: 1986,
// 		directedBy: 'Cameron',
// 		runningTimeInMinutes: 137,
// 	},
// 	{
// 		movieName: 'Men in Black',
// 		releaseYear: 1997,
// 		directedBy: 'Sonnenfeld',
// 		runningTimeInMinutes: 98,
// 	},
// 	{
// 		movieName: 'Predator',
// 		releaseYear: 1987,
// 		directedBy: 'McTiernan',
// 		runningTimeInMinutes: 107,
// 	},
// ];

// console.log('ЗА РОКОМ ВИПУСКУ (спочатку старі):', [...movies].sort(byProperty('releaseYear', '>'))); 
// // виведе масив фільмів посортованих по року випуску, від старішого до новішого
// console.log('ЗА ТРИВАЛІСТЮ (спочатку найдовші):', [...movies].sort(byProperty('runningTimeInMinutes', '<'))); 
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log('ЗА НАЗВОЮ (алфавіт):', [...movies].sort(byProperty('movieName', '>'))); 
// // виведе масив фільмів посортованих по назві, в алфавітному порядку

// function byProperty(property, direction = 0) {
//   if (direction === '>'){
//     return (a, b) => a[property] > b[property] ? 1 : -1;
//   } else if (direction === '<') {
//     return (a, b) => a[property] < b[property] ? 1 : -1;
//   } else {
//     return 0; 
//   };
// };

//2. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
function someFunction (...args) {
  console.log(...args)
};

function slower(func, seconds) { 
  return function  (...args){
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => {func(...args)}, seconds*1000);
  };
};

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(123, 456, 789);


