'use strict';

//HOMEWORK4

//1. Задача на розворот числа
const currentMaxValue = 4589;
const arr = Array.from(String(currentMaxValue), Number);
const reverseArr = arr.slice().reverse();
const reverseMaxValue = Number(reverseArr.join(''));
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'
