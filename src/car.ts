class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(newSpeed: number): number {
        this.speed = 20
        return this.speed + newSpeed
    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate(100)) // After fixing: will print 120
