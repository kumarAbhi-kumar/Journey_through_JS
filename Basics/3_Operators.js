let a = 9;
let b = 5;

// Aritmetic Operators
console.log(a + b); // Addition: 14
console.log(a - b); // Subtraction: 4
console.log(a * b); // Multiplication: 45
console.log(a / b); // Division: 1.8
console.log(a % b); // Modulus (remainder): 4
console.log(parseInt(a / b)); // Division(Type Casting): 1
console.log(a ** b); // Exponential Operator: 59049

// Comparision Opearator
let x = 10;
let y = 5;

console.log(x == y); // Equal to: false
console.log(x != y); // Not equal to: true
console.log(x > y);  // Greater than: true
console.log(x < y);  // Less than: false
console.log(x >= y); // Greater than or equal to: true
console.log(x <= y); // Less than or equal to: false

// Logical Operators
let p = true;
let q = false;

console.log(p && q); // Logical AND: false
console.log(p || q); // Logical OR: true
console.log(!p); // Logical NOT: false

// Assignment Operators
a = 10;

a += 5; // Equivalent to: a = a + 5
console.log(a); // 15

a -= 3; // Equivalent to: a = a - 3
console.log(a); // 12

a *= 2; // Equivalent to: a = a * 2
console.log(a); // 24

a /= 4; // Equivalent to: a = a / 4

console.log(a); // 6

// Unary Operators
let num = 5;

console.log(-num); // Unary minus: -5
console.log(+num); // Unary plus: 5
console.log(++num); // Increment: 6
console.log(--num); // Decrement: 5

// String Concatenamtion
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"
