class Car {
    // Marca del auto
    make: string

    constructor(make: string) {
        this.make = make;
    }

    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

const car = new Car("Toyota");

car.drive();