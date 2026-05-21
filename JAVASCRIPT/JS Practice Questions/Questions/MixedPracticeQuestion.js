// Q-1 Create a mini biodata program using variables and template literals.
var name = "Yash";
var age = 22;
var city = "Surat";

console.log(`Name: ${name}, Age: ${age}, City: ${city}`); // Name: Yash, Age: 22, City: Surat


// Q-2 Calculate the area of a rectangle.
var length = 10;
var width = 5;
var area = length * width;

console.log(`Area of the rectangle: ${area}`); // Area of the rectangle: 50

// Q-3 Calculate the simple interest.
var basic = 1000;
var rate = 5;
var time = 2;
var simpleInterest = (basic * rate * time) / 100;

console.log(`Simple Interest: ${simpleInterest}`); // Simple Interest: 100


// Q-4 Convert temperature from Celsius to Fahrenheit.
var celsius = 30;
var fahrenheit = (celsius * 9/5) + 32;
console.log(`Temperature in Fahrenheit: ${fahrenheit}`); // Temperature in Fahrenheit: 86


// Q-5 Convert kilometers into meters.
var kilometers = 15;
var meters = kilometers * 1000;
console.log(`Distance in meters: ${meters}`); // Distance in meters: 15000

// Q-6 Calculate total marks and percentage of 5 subjects.

var marks1 = 85;
var marks2 = 90;
var marks3 = 78;
var marks4 = 92;
var marks5 = 88;

var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
var percentage = (totalMarks / (5 * 100)) * 100;

console.log(`Total Marks: ${totalMarks}`); // Total Marks: 433
console.log(`Percentage: ${percentage}`); // Percentage: 86.6

var marks = [85, 90, 78, 92, 88];
var total = marks.reduce((acc, mark) => acc + mark, 0);
var percentage = (total / (marks.length * 100)) * 100;
console.log(`Total Marks: ${total}`); // Total Marks: 433
console.log(`Percentage: ${percentage}`); // Percentage: 86.6


// Q-7 Calculate electricity bill based on units consumed.
var unitsConsumed = 200;
var ratePerUnit = 10;
var electricityBill = unitsConsumed * ratePerUnit;      
console.log(`Electricity Bill: ${electricityBill}`); // Electricity Bill: 2000


// Q-8 Create a username generator using first name and birth year.

var firstName = "Yash";
var birthYear = 2004;
var username = `${firstName}${birthYear}`;
console.log(`Username: ${username}`); // Username: Yash2004


// Q-9 Check whether a string starts with a specific letter.

var str = "JavaScript";
console.log(str.startsWith("J")); // true
console.log(str.startsWith("S")); // false

// Q-10 Count the total characters in a sentence excluding spaces.
var sentence = "Hello World";
var characterCount = sentence.replace(/\s/g, '').length;
console.log(`Total characters excluding spaces: ${characterCount}`); // Total characters excluding spaces: 10


