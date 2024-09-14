// Basic Types 
//? 1. Primitive Types (number, string, boolean)
//* number
var count = 5; // integer
var decimal = 5.5; // floating point numbers
//* string
var firstName = "John"; // double quotes
var lastName = 'Doe'; // single quotes
var fullName = "".concat(firstName, " ").concat(lastName); // template strings
//* boolean
var isTrue = true; // true
var isFalse = false; // false
//? 2. Array
var arr = [1, 2, 3, 4, 5, "Hello", [12]]; // Array of any type
// 3. Tuple
var person = ["John", 25]; // fixed number of elements with fixed types
// 4. Enum (Enumeration) 
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Internal"] = 500] = "Internal";
    StatusCodes[StatusCodes["ServerError"] = 501] = "ServerError";
})(StatusCodes || (StatusCodes = {}));
var success = StatusCodes.Success;
console.log(success); // 200
// 5. Any, Unknown, Void, Null, Undefined, Never
