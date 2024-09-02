import { Car } from "./09-clase-con-privadas.js";

class ElectricCar extends Car {
    batteryLife: number = 0

    charge() {
        console.log("The car is charging.");
    }
}