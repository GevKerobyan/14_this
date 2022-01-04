// Write a Baby constructor subclassing Person.
// Besides name and age , Baby takes a third argument to initialize favoriteToy .
// Besides the methods on Person.prototype, babies have the ability to .play() :
// Should return a string "Playing with x", x being the favorite toy.


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

class Baby extends PersonConstructor{
    constructor(name, age, favoriteToy) {
        super(name,age);
        this.favoriteToy = favoriteToy;
    }
    play () {
        return `Playing with ${this.favoriteToy}`
    }
}

let kid = new Baby (`Balik`, 4, `a Giraffe`)

console.log(kid.toString());
console.log(kid.eat());
console.log(kid.poop());
console.log(kid.play());

// --------------- DONE --------------- \\