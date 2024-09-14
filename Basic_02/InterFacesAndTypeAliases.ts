/**
 * Interfaces and Type Aliases
 * Defining an interface
 * Using an interface to define object shapes
 * Extending interfaces
 * Type aliases
 * Using type aliases to define object shapes
 */

// Defining an interface
interface User {
  name: string;
  email: string;
  password: string;
  birthDate?: Date;
  isAdmin: boolean;
  paymentMethod: "debit" | "credit";
  id: number;
}

(() => {
  function randomFun(obj: User): void {
    console.log(obj);
  }
  randomFun({
    name: "John Doe",
    email: "",
    password: "",
    isAdmin: false,
    paymentMethod: "credit",
    id: 1,
  });
})();

// Extending interfaces
interface Admin extends User {
  role: "admin";
}

(() => {
  function randomFun(obj: Admin): void {
    console.log(obj);
  }
  randomFun({
    name: "John Doe",
    email: "",
    password: "",
    isAdmin: false,
    paymentMethod: "credit",
    id: 1,
    role: "admin",
  });
})();

// Type aliases
type curriculum = string | string[];

// Using type aliases to define object shapes
let student: curriculum = ["Math", "Science", "History"];


// Intersection types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};

console.log(employee);

