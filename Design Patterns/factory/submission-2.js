class Vehicle {
    getType() {
        throw new Error('getType method must be overridden');
    }
}

class Car extends Vehicle {
    getType() {
        return 'Car';
    }
}

class Bike extends Vehicle {
    getType() {
        return 'Bike';
    }
}

class Truck extends Vehicle {
    getType() {
        return 'Truck';
    }
}

class VehicleFactory {
    createVehicle() {
        throw new Error('createVehicle method must be overridden');
    }
}

class CarFactory extends VehicleFactory {
    car = new Car();
    createVehicle(){
        return this.car
    }
}

class BikeFactory extends VehicleFactory {
        car = new Bike();
    createVehicle(){
        return this.car
    }
}

class TruckFactory extends VehicleFactory {
        car = new Truck();
    createVehicle(){
        return this.car
    }
}
