//I implemented comment cozgit  Im new to this shit

// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;   // the brand or manufacturer of the vehicle
    model: string;  // the specific model name of the vehicle
    year: number;   // the year the vehicle was made
    start(): void;  // start method that returns void and logs a message
}

// Step 2: Implement the Car class that implements the Vehicle interface
class Car implements Vehicle {
    make: string;   // the brand or manufacturer of the car
    model: string;  // the specific model name of the car
    year: number;   // the year the car was made

    // Constructor to initialize the make, model, and year properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement the start method to log "ighalo Car engine started" to the console
    start(): void {
        console.log("ighalo Car engine started");  // logs a custom start message
    }
}

// Step 3: Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);  // Initialize with make, model, and year

// Step 4: Call the start method to verify the output
myCar.start(); 


//IF ERROR OCCUR, chan"ge execution policy in powershell
// In the PowerShell window, enter the following command to set the execution policy to allow scripts to run:
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser