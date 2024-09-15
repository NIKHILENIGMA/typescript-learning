// Function types
//note that the function type is a type that describes a function signature. It is a type that describes the parameters that the function takes and the return type of the function.

// Function declaration
// function which takes string as parameter and returns string
function greet(name: string): string {
  return `Hello ${name}`;
} 

console.log(greet('John'));

// fucntion which takes two numbers as parameters and returns number
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// fuction which takes no parameters and returns void (no return type)
function log(): void {
  console.log('Logging');
}

log();

// function which takes a string and callback function as parameters and returns void
function callback(name: string, cb: (value: string) => void): void {
  console.log(`Hello ${name}`);
  cb("Done");
}

callback('John', (value: string) => {
    console.log('Callback called', value);
});


// Optional and default parameters
//note that the optional parameters are parameters that may or may not be provided when calling the function. The default parameters are parameters that have a default value if not provided when calling the function.
function greetOptional(name?: string): string {
  return `Hello ${name || 'Anonymous'}`;
}

console.log(greetOptional());
console.log(greetOptional('John'));


// Rest parameters
//note that the rest parameters are parameters that allow you to pass a variable number of arguments to a function. The rest parameters are denoted by the ... followed by the parameter name.

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5));


// Function overloads
//note that the function overloads allow you to define multiple function signatures for a single function. The function overloads are useful when you want to have different function signatures for a single function.

function overload(name: string): string;
function overload(age: number): string;
function overload(value: string | number): string {
  if (typeof value === 'string') {
    return `Hello ${value}`;
  } else {
    return `Age is ${value}`;
  }
}   

console.log(overload('John'));
console.log(overload(30));
// console.log(overload(true)); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.



