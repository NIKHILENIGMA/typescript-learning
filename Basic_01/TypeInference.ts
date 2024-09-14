// Type Inference
// Understanding the type of variable, function, etc. without explicitly specifying it.
// Type annotations are not required because TypeScript can infer the type based on the value assigned to the variable.

// Example 1: Type Inference
(() => {
    let greetings = "Hello World!";
    greetings.toLowerCase();
    console.log(greetings); // Hello World!

    // number
    let userId = 3462499;
    userId.valueOf();
})();

// Example 2: Type Inference
(() => {
    let firstName = "John";
    let lastName = "Doe";
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName); // John Doe
})();

// Example 3: Type Inference
(() => {
    let count = 5;
    let decimal = 5.5;
    console.log(count, decimal); // 5 5.5
})();

// Example 4: Type Annotation
(() => {
    let person: [string, number] = ["John", 25];
    console.log(person); // [ 'John', 25 ]
})();

// Example 5: Type Annotation
(() => {
    let value: number | string | boolean; // Union Type
    value = 5;
    console.log(value); // 5
    value = "Hello";
    console.log(value); // Hello
    value = true;
    console.log(value); // true
})();