interface Shape {
    area(): number
}

class Circle implements Shape {
    // Asignamos un valor por defecto para no tener que declarar un constructor
    radius: number = 2

    area(): number {
        return Math.PI * (this.radius ** 2)
    }
}