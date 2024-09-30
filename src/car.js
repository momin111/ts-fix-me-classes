var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.accelerate = function (newSpeed) {
        this.speed = 20;
        return this.speed + newSpeed;
    };
    return Car;
}());
var car = new Car('Toyota', 100);
console.log(car.accelerate(100)); // After fixing: will print 120
