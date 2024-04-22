'use strict';


/////////
//CLASSWORK 3

/**
 * Is Even
 * Write a function called isEven that takes in a number and outputs true
 * if it's even and false otherwise.
 * @param num
 * @return {boolean}
 */

// console.log(isEven(2)); // true
// console.log(isEven(3)); // false

let num = 2;
function isEven(num) {
    if (num % 2 === 0) {
    return true
    } else {
    return false
    }
};

console.log(isEven(4));