'use strict';

// HOMEWORK 2

//1. Вивід парних чисел

//ask a number
let promptNumber = prompt ('Enter a number');

//display entered value
console.log(`Entered value: ${promptNumber}`);

//convert promptNumber to Number
promptNumber = Number (promptNumber);

//determination of a type of the entered character
if (promptNumber){

    //for loop 
    for (let i = promptNumber; i > 0; i--) {
        if (i % 2 === 0){
        console.log(i);
        };
    };

    //while loop
    let i = promptNumber
    while (i > 0) {
        if (i % 2 === 0){
        console.log(i);
        };
        i--;
    };
    
} else if (promptNumber === 0){
    console.log(`Enter a number greater than 0 !`);
} else {
    console.log(`Enter a number!`);
};


//2. Задача FizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (!(i % 3)) {
        console.log('Fizz');
    } else if (!(i % 5)) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


//3. Додаткова задача*

let string = '42559125';

let arr = string.split('').map(Number);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
        arr[i] = 0;
    } else {
        arr[i] = 1;
    };
};

let result = arr.toString();
console.log(result);
