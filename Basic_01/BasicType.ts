// Basic Types 

(() => {
    //? 1. Primitive Types (number, string, boolean)

//* number

let count = 5; // integer
let decimal = 5.5; // floating point numbers

//* string
let firstName = "John"; // double quotes
let lastName = 'Doe'; // single quotes
let fullName = `${firstName} ${lastName}`; // template strings

//* boolean
let isTrue = true; // true
let isFalse = false; // false

//? 2. Array

let arr = [1, 2, 3, 4, 5, "Hello", [12]]; // Array of any type

// 3. Tuple

let person: [string, number] = ["John", 25]; // fixed number of elements with fixed types

// 4. Enum (Enumeration) 

enum StatusCodes {
    Success = 200,
    NotFound = 404,
    Internal = 500,
    ServerError = 501
}

let success: StatusCodes = StatusCodes.Success;
console.log(success); // 200


// 5. Any, Unknown, Void, Null, Undefined, Never
})()