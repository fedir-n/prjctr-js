






























//////////////////////////////////
// // HOMEWORK 2

// //1. Вивід парних чисел

// //ask a number
// let promptNumber = Number (prompt ('Enter a number'));

// //display entered value
// console.log(`Entered value: ${promptNumber}`);

// //determination of a type of the entered character
// if (promptNumber){

//     //ask to select loop type
//     let promptLoop = Number (prompt ('Enter 1 for "for loop" or 2 for "while loop"'));

//     //for loop 
//     if (promptLoop === 1){
//         console.log(`"for loop" selected`);

//         for (let i = promptNumber; i > 0; i--) {
//             if (i % 2 === 0){
//             console.log(i);
//             };
//          };
    
//     //while loop
//     } else if (promptLoop === 2) {
//         console.log(`"while loop" selected`);

//         let i = promptNumber
//         while (i > 0) {
//             if (i % 2 === 0){
//                 console.log(i);
//              };
//         i--;
//         };

//     } else {
//         console.log(`Enter an allowed value!`);
//     };

// } else if (promptNumber === 0){
//     console.log(`Enter a number greater than 0 !`);
// } else {
//     console.log(`Enter a number!`);
// };


//2. Задача FizzBuzz

let string = '42559125';
let result = '';

let arr = string.split('').map(Number);
console.log(arr);

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 5) {
        arr[i] = 0;
    } else {
        arr[i] = 1;
    };
};
console.log(arr);