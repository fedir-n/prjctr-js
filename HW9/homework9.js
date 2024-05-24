'use strict';

//HOMEWORK9

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:

// для елементу з текстом 'Навігація по DOM дереву'
const selector1 = document.querySelector('#headerTwo');
console.log(selector1);

// для першого елементу <section>
const selector2 = document.querySelector('section');
console.log(selector2);

// для елементу списку з текстом 'Пункт 5'
const selector3a = document.evaluate("//li[text()='Пункт 5']", document, null, XPathResult.ANY_TYPE, null).iterateNext(); 
console.log(selector3a);

const selector3b = document.querySelector("ul li:nth-child(5n)");
console.log(selector3b);

// для елементу з класом 'hatredLevelBlock'
const selector4 = document.querySelector(".hatredLevelBlock");
console.log(selector4);