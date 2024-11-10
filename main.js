// Step 2: Implement the Car class that implements the Vehicle interface
var Car = /** @class */ (function () {
    // Constructor to initialize the make, model, and year properties
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method to log "Car engine started" to the console
    Car.prototype.start = function () {
        console.log("Car engine started"); // logs a custom start message
    };
    return Car;
}());
// Step 3: Create an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2021); // Initialize with make, model, and year
// Step 4: Call the start method to verify the output
myCar.start(); // should log "Car engine started" to the console
