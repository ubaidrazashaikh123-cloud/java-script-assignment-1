// Q1: Alerts 
alert("Welcome to JavaScript Assignment!")


// Q2: Variables for Strings
var myName = "Ubaid Raza";
console.log("My name is: " + myName);


// Q3: Variables for Numbers
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
console.log("Sum of num1 and num2 is: " + sum);


// Q4: Variable Names - Legal & Illegal

// Legal variable names:
var userName;
var my_age;
var totalAmount;
var $price;
var _count;

// Illegal variable names (explained in comments):
// var 123name;   //  Cannot start with a number
// var my-name;   //  Hyphen (-) not allowed
// var alert;     //  'alert' is a reserved keyword
// var user name; //  Space not allowed
// var @age;      //  @ symbol not allowed


// Q5: Math Expressions
var a = 20;
var b = 4;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));


// Q6a: Modulus (%) Operator
var number = 7;
if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}


// Q6b: Pre/Post Increment & Decrement Operators
var x = 5;
console.log("Original x: " + x);

console.log("++x = " + (++x)); 
console.log("x++ = " + (x++)); 
console.log("--x = " + (--x)); 
console.log("x-- = " + (x--)); 

console.log("Final x value: " + x);


// Q7: Concatenating Text Strings
var firstName = "Ubaid";
var lastName = "Shaikh";
var fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);



// Q8: Prompts / User Input
var color = prompt("What is your favorite color?");
alert("Your favorite color is " + color + "!");


// Q9: if Statements
var checkNumber = 15;
if (checkNumber > 10) {
  console.log("The number is greater than 10");
}


// Q11: if...else and else if Statements
var marks = prompt("Enter your marks:");

if (marks >= 80 && marks <= 100) {
  alert("A Grade");
} else if (marks >= 60 && marks < 80) {
  alert("B Grade");
} else if (marks >= 40 && marks < 60) {
  alert("C Grade");
} else if (marks < 40) {
  alert("Fail");
} else {
  alert("Invalid marks entered!");
}


// Simple Calculator
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operator = prompt("Enter operator (+, -, *, /):");
var result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator!";
}

alert("Result: " + result);
