
// abstract class
//note An abstract class is a class that cannot be instantiated. It is used to define a blueprint for other classes.

abstract class Animal {
  // abstract method
  abstract makeSound(): void;

  // regular method
  move(): void {
    console.log("roaming the earth...");
  }
}

// class that extends Animal
class Dog extends Animal {
  // implement the abstract method
  makeSound(): void {
    console.log("bark");
  }
}

let myDog = new Dog();
myDog.makeSound();
myDog.move();

// Output
// bark
// roaming the earth...



