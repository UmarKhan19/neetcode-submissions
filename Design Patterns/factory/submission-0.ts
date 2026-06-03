class Vehicle {
    getType(): string {
        throw new Error('getType method must be overridden');
    }
}

class Car extends Vehicle {
    getType(): string {
        return 'Car';
    }
}

class Bike extends Vehicle {
    getType(): string {
        return 'Bike';
    }
}

class Truck extends Vehicle {
    getType(): string {
        return 'Truck';
    }
}

class VehicleFactory {
    createVehicle(): Vehicle {
        throw new Error('createVehicle method must be overridden');
    }
}

class CarFactory extends VehicleFactory {
    car = new Car();

    createVehicle(): Vehicle {
        return this.car;
    }
}

class BikeFactory extends VehicleFactory {
    bike = new Bike();

    createVehicle(): Vehicle {
        return this.bike;
    }
}

class TruckFactory extends VehicleFactory {
    truck = new Truck();

    createVehicle(): Vehicle {
        return this.truck;
    }
}
