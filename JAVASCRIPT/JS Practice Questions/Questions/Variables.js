// Q-1  Create a variable called studentName and store your name in it.

var studentName = "Yash Patel";
console.log(studentName); // Yash Patel

// Q-2 Create a variable age and print it.

var age = 22;
console.log(age);    // 22

// Q-3 Create two variables and swap their values.

var a = 10;
var b = 20;

console.log("Before: ", a, b) // 10 20

a = a+b;  // Now a becomes 30
b = a-b;  // Now b becomes 10 , bcz 30 - 20 ,  means b swap to a 
a = a-b  //  Now a becomes 20, bcz 30 - 10 , means a also swap to b

console.log("After: ", a, b) // 20 10


// Q-4 Create a constant variable for PI and print it.

const PI = 3.14;
console.log(PI) // 3.14


// Q-5 Declare a variable without assigning a value and print it.

var withoutAssigning;
console.log(withoutAssigning); // undefined,  but if we use 
                    // let or const then it will be a Reffference Error

// Q-6 Create a variable score and increase it by 10.

var score = 30;
console.log(score) // 30
score += 10;  /// it has score = score + 10;, it's sort hand 
console.log(score) // 40


// Q-7 Create three variables for first name, last name, and full name.

var firstName;
var lastName;
var fullName;

firstName = "Yash"
lastName = "S"
fullName = "Patel" 
console.log(firstName, lastName, fullName);  // Yash S Patel


