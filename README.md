# `this & more`

## 01 - Calculator Constructor

#### Create functions for the Calculator class that can do the following:
* Add two numbers.
* Subtract two numbers.
* Multiply two numbers.
* Divide two numbers.

```
const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
```
[See the solution ✌️](https://github.com/GevKerobyan/14_this/blob/master/classWork14_01.js)

---

## 02 - Person - age comparison

Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

* _{other person name} is {older than / younger than / the same age as} me._
    
```
const p1 = Person("Samuel", 24)
const p2 = Person("Joel", 36)
const p3 = Person("Lily", 24)

p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
```
[See the solution ✌️](https://github.com/GevKerobyan/14_this/blob/master/classWork14_02.js)

---

## 03 - Person Constructor

* Write a Person Constructor that initializes name and age from arguments.
* All instances of Person 
    - should initialize with an empty stomach array.
    - should initialize with an odometer at 0

* Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank . - STRETCH: Give cars ability to .drive(distance) . The
distance driven:
* Should cause the odometer to go up.
* Should cause the the tank to go down taking milesPerGallon into account.
* STRETCH: A car which runs out of fuel while driving can't drive any more distance:
* The drive method should return a string "I ran out of fuel at x miles!" x being odometer.

```
console.log(suv.fill(4));
console.log(suv.drive(40));
console.log(suv.fill(3));
console.log(suv.drive(150));
console.log(suv.drive(30));
console.log(suv.fill(13));
console.log(suv.drive(100));
console.log(suv.odometer);
console.log(suv.tank);
```

[See the rest ✌️](https://github.com/GevKerobyan/14_this/blob/master/classWork14_03.js)

---

## 05 - Baby Constructor

_Write a Baby constructor subclassing Person._
* Besides name and age , Baby takes a third argument to initialize favoriteToy .
* Besides the methods on Person.prototype, babies have the ability to .play() :
* Should return a string "Playing with x", x being the favorite toy.

```
console.log(kid.toString());
console.log(kid.eat());
console.log(kid.poop());
console.log(kid.play());
```

[See the rest ✌️](https://github.com/GevKerobyan/14_this/blob/master/classWork14_05.js)

---