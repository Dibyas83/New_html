
let y;
let x = 25;
let age = 30;
let price = 100.50;
y = 456;
let gpa = 3.75;
let firstName = "Pramod";
let online = true;
let forsale = false;
let isstudent = true
let students = 30;
let res = 6/2 ** (2 + 5); // 6/2^7 = 6/128 = 0.046875
console.log('x: ' + x);
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students % 19; // modulus operator
// console.log("Hello World");
console.log(students);
students = students ** 2;
console.log('students: ' + students);
students++; // increment operator
students--; // decrement operator
students **= -2;

console.log('students: ' + students);
console.log(Math.sqrt(25));
console.log(x **= -2);
console.log('y: ' + y);
console.log('price: ' + price);
console.log(`you are ${age} years old`);
console.log(`you are ${age} years old`);
console.log(`the price is $${price} `);
console.log('your gpa is:  ${gpa}');
console.log(typeof gpa);
console.log(typeof x);
console.log(typeof firstName);
console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`is this home for sale: ${forsale}`);
console.log(`is this person a student: ${isstudent}`);

document.getElementById("p1").textContent = `your name is ${firstName}`;
document.getElementById("p2").textContent = `your age is ${age}`;
document.getElementById("p3").textContent = `is this home for sale: ${forsale}`;
//document.getElementById("p4").textContent = `is this person a student: ${isstudent}`;

//how to accept user input
//easy way window promt
//professional way is to use HTML textbox like button
let username;
username = window.prompt("Enter your username: ");
console.log(`Hello ${username}, welcome to the site!`);

let userName = prompt("Enter your name: ");





