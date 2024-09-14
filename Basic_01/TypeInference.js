// Type Inference
// Understanding the type of variable, function, etc. without explicitly specifying it.
// Type annotations are not required because TypeScript can infer the type based on the value assigned to the variable.
// Example 1: Type Inference
(function () {
    var greetings = "Hello World!";
    greetings.toLowerCase();
    console.log(greetings); // Hello World!
    // number
    var userId = 3462499;
    userId.valueOf();
})();
// Example 2: Type Inference
(function () {
    var firstName = "John";
    var lastName = "Doe";
    var fullName = "".concat(firstName, " ").concat(lastName);
    console.log(fullName); // John Doe
})();
// Example 3: Type Inference
(function () {
    var count = 5;
    var decimal = 5.5;
    console.log(count, decimal); // 5 5.5
})();
// Example 4: Type Annotation
(function () {
    var person = ["John", 25];
    console.log(person); // [ 'John', 25 ]
})();
// Example 5: Type Annotation
(function () {
    var value; // Union Type
    value = 5;
    console.log(value); // 5
    value = "Hello";
    console.log(value); // Hello
    value = true;
    console.log(value); // true
})();
