export class Car {
    // Marca del auto
    private make: string

    getMake(): string {
        return this.make;
    }

    constructor(make: string) {
        this.make = make;
    }

    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

const car = new Car("Toyota");

car.drive();