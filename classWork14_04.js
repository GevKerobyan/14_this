// Write a Car constructor that initializes model and milesPerGallon from arguments.

//  All instances built with Car:

//      should initialize with an tank at 0
//      should initialize with an odometer at 0

// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank . 
//      - STRETCH: Give cars ability to .drive(distance) . The
// distance driven:
// Should cause the odometer to go up.
// Should cause the the tank to go down taking milesPerGallon into account.
//          STRETCH: A car which runs out of fuel while driving can't drive any more distance:

// The drive method should return a string "I ran out of fuel at x miles!" x being odometer .

"use strict";

class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
        return `Can drive ${this.tank*this.milesPerGallon} miles`
    }
    drive(distance) {
        if (this.tank > 0){
            this.tank -= distance/this.milesPerGallon;
            this.odometer += distance;
            return `Still enough fuel for ${this.tank*this.milesPerGallon} miles`
        }   else {
            return `Ran out of fuel at ${this.odometer}`
        }
    }
}

let suv = new Car("Vilis", 80);
console.log(suv.fill(4));
console.log(suv.drive(40));
console.log(suv.fill(3));
console.log(suv.drive(150));
console.log(suv.drive(30));
console.log(suv.fill(13));
console.log(suv.drive(100));
console.log(suv.odometer);
console.log(suv.tank);

// --------------- DONE --------------- \\