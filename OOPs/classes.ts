// Class 

class BottleMaker {
    // Properties
    public color;
    public size: number;
    public material: string;
    public price: number;

    // Constructor
    constructor(color: string, size: number, material: string, price: number) {
        this.color = color;
        this.size = size;
        this.material = material;
        this.price = price;
    }

    // Methods
    getDetails() {
        return `Color: ${this.color}, Size: ${this.size}, Material: ${this.material}, Price: ${this.price}`;
    }
}

let bottle1 = new BottleMaker('Red', 500, 'Plastic', 100);
console.log(bottle1.getDetails());