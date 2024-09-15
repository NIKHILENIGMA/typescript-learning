// Getters and Setters
//note Getters and setters allow you to define methods to get and set the values of an object's properties.

class Book {
    private _name: string;
    private _author: string;

    constructor(name: string, author: string) {
        this._name = name;
        this._author = author;
    }
    // In JavaScript, getters and setters are defined using the get and set.
    /// getName(){
    ///     return this._name;
    /// }
    /// setName(){
    ///     this._name = newName;
    /// }

    // In TypeScript, getters and setters are defined using the get and set keywords.
    get name(): string {    
        return this._name;
    }

    get author(): string {
        return this._author;
    }

    set name(newName: string) {
        this._name = newName;
    }

    set author(newAuthor: string) {
        this._author = newAuthor;
    }
}

const book = new Book("JavaScript", "John Doe");
console.log(book.name); // JavaScript
book.name = "TypeScript";
console.log(book.name); // TypeScript
console.log(book.author); // John Doe
book.author = "Mike Smith"; // Mike Smith
