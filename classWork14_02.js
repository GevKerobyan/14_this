"use strict";

let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Person.prototype.compareAge = function (person) {
    if (person.age > this.age) {
        return `${person.name} is older than me.`;
    } else if (person.age < this.age) {
        return `${person.name} is younger than me.`;
    } else {
        return `${person.name} is the same age as me.`;
    }
};

const sam = new Person("Samuel", 24);
const joel = new Person("Joel", 36);
const lily = new Person("Lily", 24);

console.log(sam.compareAge(joel));
console.log(joel.compareAge(sam));
console.log(sam.compareAge(lily));

// --------------- DONE --------------- \\