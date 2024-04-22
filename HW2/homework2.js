// HOMEWORK 2

//1. Вивід парних чисел

//ask a number
let promptNumber = Number (prompt ('Enter a number'));

//display entered value
console.log(`Entered value: ${promptNumber}`);

//determination of a type of the entered character
if (promptNumber){

    //ask to select loop type
    let promptLoop = Number (prompt ('Enter 1 for "for loop" or 2 for "while loop"'));

    //for loop 
    if (promptLoop === 1){
        console.log(`"for loop" selected`);

        for (let i = promptNumber; i > 0; i--) {
            if (i % 2 === 0){
            console.log(i);
            };
         };
    
    //while loop
    } else if (promptLoop === 2) {
        console.log(`"while loop" selected`);

        let i = promptNumber
        while (i > 0) {
            if (i % 2 === 0){
                console.log(i);
             };
        i--;
        };

    } else {
        console.log(`Enter an allowed value!`);
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
let result = '';

let arr = string.split('').map(Number);
console.log(arr);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
        arr[i] = 0;
    } else {
        arr[i] = 1;
    };
};

console.log(arr);
