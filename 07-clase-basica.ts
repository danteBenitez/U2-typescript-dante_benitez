class Car {
    // Marca del auto
    // Asignamos un valor por defecto porque declarar un constructor
    // se realiza en el siguiente ejercicio
    make: string = "Toyota"

    drive() {
        console.log(`Driving a ${this.make}`);
    }
}