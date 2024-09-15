// Type assertion 
//note : Type assertion is a way to tell the compiler “trust me, I know what I’m doing.”

let a: any = "this is a string";

// Method 1
// (a as string) //or
// Method 2
// (<string>a) //both are same

// Type casting
let casting = (a as string).toLowerCase();

console.log(casting);

// Non nullable assertion
let b: string | null = "this is a string";

b!.toLowerCase(); // ! is used to tell the compiler that b is not null or undefined 






