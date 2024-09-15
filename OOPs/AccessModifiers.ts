// Public
//note Public members are accessible from anywhere. They can be accessed and modified from outside the class.By default, all properties and methods in a JavaScript class are public.
/* The class Animal defines an object with a name property and a method move that logs the distance the animal moved. */
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    } //? public specifies that the method can be called from outside the class. void specifies that the method does not return a value. 
    
}

const dog = new Animal("Dog");
console.log(dog.name); // Accessible
dog.move(10); // Accessible



// Private
//note Private members are accessible only within the class they are defined. They cannot be accessed or modified from outside the class.In modern JavaScript (ES2022 and later), private fields and methods are denoted by a # prefix.

class Car {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    private move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    } //? private specifies that the method can only be called from within the class. void specifies that the method does not return a value.

    public startMoving(distance: number): void {
        this.move(distance); // Accessible within the class
    }
}

const car = new Car("Lamborghini");
//console.log(dog.name); // Error: Property 'name' is private and only accessible within class 'Car'.
// dog.move(10); // Error: Method 'move' is private and only accessible within class 'Car'.
car.startMoving(10); // Accessible


// Protected
//note Protected members are accessible within the class they are defined and in the subclasses. They cannot be accessed or modified from outside the class or its subclasses.

class Motorbike {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Electribike extends Motorbike {
    constructor(name: string) {
        super(name);
    }

    public distanceCover(distance: number): void {
        this.move(distance); // Accessible within derived class
    }
}

const electribike = new Electribike("Motorbike");
// console.log(motorbike.name); // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
// motorbike.move(10); // Error: Method 'move' is protected and only accessible within class 'Animal' and its subclasses.
electribike.distanceCover(10); // Accessible


// Readonly
//note Readonly members can be accessed but cannot be modified. They can be initialized in the constructor or at the point of declaration.

class Truck {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const truck = new Truck("Truck");
console.log(truck.name); // Accessible
// truck.name = "New Truck"; // Error: Cannot assign to 'name' because it is a read-only property.

// Optional Properties
//note Optional properties can be omitted when creating an object. They are denoted by a ? suffix.

class Person {
    public name: string;
    public age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Alice");
console.log(person1); // { name: 'Alice' }

const person2 = new Person("Bob", 30);
console.log(person2); // { name: 'Bob', age: 30 }

// Parameter Properties
//note Parameter properties allow you to declare and initialize properties in a single place. They are denoted by an access modifier in the constructor parameter.

class Student {
    constructor(public name: string, private age: number) {
    }
}

const student = new Student("Alice", 20);
console.log(student.name); // Accessible
// console.log(student.age); // Error: Property 'age' is private and only accessible within class 'Student'.


