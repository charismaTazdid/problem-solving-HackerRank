class CarDriver {
    constructor(car) {
        this.car = car
    }
    drive() { console.log(this.car + '  is Driving...') }
    move() { console.log(this.car + ' is Moving Forword...') }
    brake() { console.log(this.car + ' is Stop Now...') }
};

const driver1 = new CarDriver("Suzuki")
const driver2 = new CarDriver("Toyota")

driver1.drive()
driver1.move()
driver1.brake()

console.log('.......................')

driver2.drive()
driver2.move()
driver2.brake()