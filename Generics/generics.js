// Generics
//note that the generics allow you to define a function or class that can work with any data type. The generics are useful when you want to create a function or class that can work with any data type.
function logger(arg) {
    console.log(arg);
}
logger("Hello World");
logger(100);
logger(true);
// Generics in functions
//note that the generics in functions allow you to define a function that can work with any data type. The generics in functions are useful when you want to create a function that can work with any data type.
// custom generic function
function log(arg) {
    console.log(arg);
}
log("Hello World");
log(100);
log(true);
//note that while calling the function, you do not need to specify the data type because the TypeScript compiler can infer the data type from the argument.
log("------------------------------------------------------");
function display(arg) {
    console.log(arg);
}
display({ name: "John", age: 30, value: 5 });
log("------------------------------------------------------");
// Generics classes
//note that the generics classes allow you to define a class that can work with any data type. The generics classes are useful when you want to create a class that can work with any data type.
var SoftwareEngineer = /** @class */ (function () {
    function SoftwareEngineer(key) {
        this.key = key;
        log(key);
    }
    return SoftwareEngineer;
}());
var engineer = new SoftwareEngineer("John");
