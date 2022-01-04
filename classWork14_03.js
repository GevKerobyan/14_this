// Write a Person Constructor that initializes name and age from arguments.
// All instances of Person should initialize with an empty stomach array.

// Give instances of Person the ability to .eat("someFood") :

// When eating an edible, it should be pushed into the stomach .

// The eat method should have no effect if there are 10 items in the stomach .

// Give instances of Person the ability to .poop() :

// When an instance poops, its stomach should empty.

// Give instances of Person a method .toString() :

// It should return a string with name and age . Example: "Mary, 50"

"use strict";

class PersonConstructor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(someFood) {
        if (this.stomach.length < 10) {
            this.stomach.push(someFood);
            if (this.stomach.length < 5){
            return `${this.name} is starving`
        }
        if(this.stomach.length > 5){
            return `${this.name} surely could use a bite`
        }
        } else
            return `${this.name} is stuffed`;
    }
    poop() {
        this.stomach = [];
        return `${this.name}'s ready to eat again`;
    }

    toString() {
        return `${this.name} is ${this.age} years old`;
    }
}

let george = new PersonConstructor(`da Dude`, 30)

george.eat("shrooms")
george.eat("BBQ")
george.eat("Vegetables")
george.eat("Fish")
george.eat("Oysters")

console.log(george.toString());

console.log(george.eat());
console.log(george.stomach);
console.log(george.poop());
console.log(george.stomach);


// --------------- DONE --------------- \\