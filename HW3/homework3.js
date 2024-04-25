'use strict';

//HOMEWORK3

//1. Задача про ітерацію
function iterativeOddSumTo(number) { 
    let mathOddSum = 0;   
    for (let i = number; i > 0; i--) {
        if (i % 2) {
        mathOddSum += i;
        };
    };
    return mathOddSum;
    };
    
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25


//2. Задача про рекурсію
function recursiveOddSumTo(number) {
    if (number <= 0)  {
        return 0;
    } else if (number % 2) {
        return number + recursiveOddSumTo(number - 2);
    } else {
        return recursiveOddSumTo(number - 1);
    };
 };
    
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(9)) // 25
console.log(recursiveOddSumTo(10)) // 25

    
//3. Додаткова задача*

const isXOEqual = (str) => {
    str = str.toLowerCase();
    let arr = str.split('');
    let countSymbolOne = arr.filter(x => x ==='x').length;
    let countSymbolTwo = arr.filter(x => x ==='o').length;
   if (countSymbolOne === countSymbolTwo) {
    return true;
   } else {
    return false;
   }
};


console.log(isXOEqual("ooxx")) // true
console.log(isXOEqual("xooxx")) // false
console.log(isXOEqual("ooxXm")) // true
console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")) // false


//improvement
const isSymbolsEqual = (str, symbolOne, symbolTwo) => {
    str = str.toLowerCase();
    let arr = str.split('');
    let countSymbolOne = arr.filter(x => x === String(symbolOne)).length;
    let countSymbolTwo = arr.filter(x => x === String(symbolTwo)).length;
   if (countSymbolOne === countSymbolTwo) {
    return true;
   } else {
    return false;
   }
};

console.log(isSymbolsEqual("ooxx",'x', 'o')) // true
console.log(isSymbolsEqual("xooxx",'x', 'o')) // false
console.log(isSymbolsEqual("ooxXm",'x', 'o')) // true
console.log(isSymbolsEqual("zpzpzpp",'x', 'o')) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isSymbolsEqual("zzoo",'x', 'o')) // false
