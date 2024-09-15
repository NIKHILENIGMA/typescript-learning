// Type Guards and TypeScript Utility Types
//note Type guards are some expression that performs a runtime check that guarantees the type in some scope.


// Using typeof and instanceof
function addWithUnion(arg1: string | number, arg2: string | number) {
    if (typeof arg1 === "string") {
        console.log("arg1 is a string");
        console.log(arg1 + " " + arg2);
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log("arg1 and arg2 are numbers");
        console.log(arg1 + arg2);
    }
}

addWithUnion("1", "2");
addWithUnion(1, 2);
addWithUnion("1", 2);

// Output:
// arg1 is a string
// 1 2
// arg1 and arg2 are numbers


// Partial Required Readonly 