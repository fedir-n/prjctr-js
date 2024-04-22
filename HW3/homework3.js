'use strict';

//HOMEWORK3

//1. Задача про ітерацію
function iterativeOddSumTo(number) { 
    let mathOddSum = 0;   
    for (let i = number; i > 0; i--) {
        if (i % 2) {
        mathOddSum += i
        };
    };
    return mathOddSum;
    };
    
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25

    // // optimized by chatGPT 
    // function iterativeOddSumTo(number) { 
    //     let mathOddSum = 0;   
    //     let start = number % 2 === 0 ? number - 1 : number; // Початкове число для ітерації
    //     for (let i = start; i > 0; i -= 2) { // Зменшення на 2 для переходу до наступного непарного числа
    //         mathOddSum += i;
    //     }
    //     return mathOddSum;
    // } 

    // chatGPT solution
    // function iterativeOddSumTo(number) {
    //     let sum = 0;
    //     for (let i = 1; i <= number; i += 2) {
    //         sum += i;
    //     }
    //     return sum;
    // }




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

    // //chatGPT solution
    // function recursiveOddSumTo(number, currentSum = 0) {
    //     if (number <= 0) {
    //         return currentSum;
    //     } else {
    //         if (number % 2 !== 0) {
    //             currentSum += number;
    //         }
    //         return recursiveOddSumTo(number - 1, currentSum);
    //     }
    // }
    

    
//3. Додаткова задача*

const isXOEqual = (str) => {
    str = str.toLowerCase();
    arr = str.split('');
    countSymbolOne = arr.filter(x => x ==='x').length;
    countSymbolTwo = arr.filter(x => x ==='o').length;
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
    arr = str.split('');
    countSymbolOne = arr.filter(x => x === String(symbolOne)).length;
    countSymbolTwo = arr.filter(x => x === String(symbolTwo)).length;
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


//////////////////////////////////