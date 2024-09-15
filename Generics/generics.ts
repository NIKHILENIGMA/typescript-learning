// Generics
//note that the generics allow you to define a function or class that can work with any data type. The generics are useful when you want to create a function or class that can work with any data type.

function logger<T>(arg: T): void {
  console.log(arg);
}
logger<string>("Hello World");
logger<number>(100);
logger<boolean>(true);

// Generics in functions
//note that the generics in functions allow you to define a function that can work with any data type. The generics in functions are useful when you want to create a function that can work with any data type.

// custom generic function
function log<T>(arg: T): void {
  console.log(arg);
  
}

log("Hello World");
log(100);
log(true);
//note that while calling the function, you do not need to specify the data type because the TypeScript compiler can infer the data type from the argument.
log("------------------------------------------------------")

// Generics interfaces
//note that the generics interfaces allow you to define an interface that can work with any data type. The generics interfaces are useful when you want to create an interface that can work with any data type.

interface IValue<T> {
    name: string;
    age: number;
    value: T;
}

function display<T>(arg: IValue<T>): void {
    console.log(arg);
}

display<number>({name: "John", age: 30, value: 5});
log("------------------------------------------------------")

// Generics classes
//note that the generics classes allow you to define a class that can work with any data type. The generics classes are useful when you want to create a class that can work with any data type.

class SoftwareEngineer<T>{
    constructor(public key: T) {
        log(key);
    }
}

let engineer = new SoftwareEngineer<string>("John");
