// Q-1 Check whether a number is positive or negative.

var num = 20;

if (num > 0) {
  console.log("Positive"); // this will be run
} else {
  console.log("Positive");
}

// Q-2 Check whether a number is even or odd.

var num = 20;
if (num % 2 === 0) {
  console.log("EVEN NUMBER"); // this will run
} else {
  console.log("ODD NUMBER");
}

// Q-3 Check whether a person is eligible to vote.

var age = 20;
if (age >= 18) {
  console.log("Can Vote.."); // This will run
} else {
  console.log("Can Not Vote....");
}

// Q-4 Find the largest among two numbers.

var a = 25;
var b = 30;
var max = Math.max(a, b);
console.log(max); // 30
console.log(a > b ? a : b); // 30

// Q-5 Find the largest among three numbers.

var a = 25;
var b = 99;
var c = 45;
var max = Math.max(a, b, c);
console.log(max); // 45

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b); // this will run   , 99
} else {
  console.log(c);
}

// Q-6 Check whether a year is a leap year.

var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is Leap year..."); // this will runs
} else {
  console.log(year + " is not Leap year...");
}

// Q-7 Check whether a number is divisible by both 3 and 5.

var num = 20;

if (num % 3 == 0 && num % 5 === 0) {
  console.log(num + " is divisiable by both 3 and 5.");
} else {
  console.log(num + " is not divisiable by both 3 and 5.");
}

// Q-8 Create a simple grading system:

var marks = 75;

if (marks >= 90) {
  console.log("A+ Grade");
} else if (marks >= 75) {
  console.log("B+ Grade"); // this will run
} else if (marks >= 50) {
  console.log("C+ Grade");
} else {
  console.log("Fail");
}

// Q-9 Check whether a character is a vowel or consonant.

var vowels = "aeiouAeiou";
var char = "g";

if (vowels.includes(char)) {
  console.log(char + " is a vowel");
} else {
  console.log(char + " is a consonant"); // this will run
}

// Q-10 Create a calculator using switch statement.

var num1 = 20;
var num2 = 10;
var operator = "*";
var result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    if (num1 === 0 && num2 === 0) {
      result = "Error: Not divisiable by 0..";
    } else {
      result = num1 / num2;
    }
    break;

  default:
    result = "Error: Invalid Operator...";
}

console.log("Result: " + result); // 200

// Q-11 Print the day name based on a number (1–7).

var day = 7;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thurseday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default: 
  console.log("Invalid Choice..")
}



// Q-12 Check whether a username is "admin" and password is "1234".

var username = "admin";
var password = "1234";

if(username === "admin" && password === "1234") {
    console.log("All Details are correct..")
} else{
    console.log("All Details are Incorrect..")
}