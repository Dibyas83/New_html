
//changing datatype ex - from string to number
//const =  a variable that cannot be changed
let age = window.prompt("Enter your age:");
age = Number(age); // Convert the string input to a number
//age += 1;
age+=1; // This will concatenate the string "1" to the age string
// To convert the string to a number, you can use Number() or parseInt()
let s = "123";
let num = Number(s);
console.log(age, typeof age); // Output: age + 1 (if input was 25, it will output 26)
console.log(num, typeof num); // Output: 123

let x = "pizza";
let a = "";
let y = "burger";
let z = "pasta"; // Concatenates the two strings
let b = "";

x = Number(x); // This will convert the string "pizza" to NaN (Not a Number)
a = Number(a); // This will convert the empty string to 0
y = String(y); // This will convert the string "burger" to "burger" (No change)
z = Boolean(z); // This will convert the string "pasta" to "pasta" (No change)
b = Boolean(b); // This will convert the string ";" to true (non-empty string is truthy)

console.log(x, typeof x); // Output: NaN
console.log(y, typeof y); // Output: "burger" string
console.log(z, typeof z); // Output: "pasta" string
console.log(a, typeof a); // Output: 0 number
console.log(b, typeof b); // Output: true boolean