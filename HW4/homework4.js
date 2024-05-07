'use strict';

//HOMEWORK4

//1. Задача на розворот числа
const currentMaxValue = 4589;
const reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//2. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
const resultsArray = [1, 2, [3, [4]]];
const flatArray = resultsArray.flat(Infinity);
const productOfArray = flatArray.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(productOfArray); // 24