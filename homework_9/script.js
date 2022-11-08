

'use strict'  

function makeFibonacciFunction() {
    let firstNumber = 0;
    let secondNumber= 1;
    let result;

    return function() {
        result = firstNumber + secondNumber;
        console.log(secondNumber);
        firstNumber = secondNumber;
        secondNumber = result;
    };
};

const fibonacci = makeFibonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();

