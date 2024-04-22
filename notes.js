 //HW3 -ex1
 
 // optimized by chatGPT 
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

    //HW3 -ex2 
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
    