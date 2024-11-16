// Task 4
interface Product {
    type: string;
    price: number;
}
function findsum(products: Product[]): number {
    return products.reduce((final, product) => final + product.price, 0);
}
const products: Product[] = [
    { type: "Laptop", price: 300 },
    { type: "Airpods", price: 100 },
    { type: "iPhone", price: 500 },
];
console.log("Price:", findsum(products));

// Task 5
function validation(email: string): boolean {
    const emailsyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailsyntax.test(email);
}

console.log("Is this email Valid (wala@gmail.com)? ", validation("wala@gmail.com")); 
console.log("Is this email Valid (walagmail.com)?", validation("walagmail.com")); 
