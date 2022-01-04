// Create functions for the Calculator class that can do the following:
//      Add two numbers.
//      Subtract two numbers.
//      Multiply two numbers.
//      Divide two numbers.


"use strict";

let Calculator = class {
    constructor (first, second) {
        this.first = first;
        this.second = second;
    }
    add (first, second) {
        return first + second
    }
    subtract (first, second) {
        return first - second
    }
    multiply (first, second) {
        return first * second
    }
    divide (first, second) {
        return first / second
    }
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));

// --------------- DONE --------------- \\