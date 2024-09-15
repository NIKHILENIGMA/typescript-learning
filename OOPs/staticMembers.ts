// Static Members 
//note Static members are shared among all instances of a class. They are accessed using the class name. They are defined using the static keyword. They can be properties or methods. They cannot access instance members. They can access other static members.

class automobile {
    public static wheels = 4;
    public static honk(): void {
        console.log("Honk! Honk!");
    }
}

console.log(automobile.wheels); // 4
automobile.honk(); // Honk! Honk!


