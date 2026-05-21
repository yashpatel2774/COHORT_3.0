// Q-1 Create a string and print its length.

var str = "Hello JavaScript";
console.log(str.length);  // 16

// Q-2 Convert a string into uppercase.

var str1 = "javascript";
console.log(str1.toUpperCase());  // JAVASCRIPT

// Q-3 Convert a string into lowercase.

var str2 = "JAVASCRIPT";
console.log(str2.toLowerCase());  // javascript

// Q-4 Check if a string includes the word "JavaScript".

var str = "Hello javascript";
console.log(str.includes("javascript")); // true


// Q-5 Extract the word "World" from "Hello World".

var str = "Hello World";
var word = str.substring(6, 11);  
console.log(word);  // World
var word = str.slice(6, 11);  
console.log(word);    // World


// Q-6 Replace "apple" with "mango" in a sentence.
var str = "This is the Mango";
var newWord = str.replace("Mango", "apple");
console.log(newWord); // This is the apple


// Q-7 Split "HTML,CSS,JS" into an array.

var str = "HTML,CSS,JS";
var newSplit = str.split(",");
console.log(newSplit); /// ["HTML", "CSS", "JS"];


// Q-8 Remove extra spaces from a string.

var str = "    Hello World  ";
var newStr = str.trim();  // trim for both end , 
                    // for perticular trimStart and trimEnd
console.log(newStr);  // Hello World


// Q-9 Repeat the word "Hi" 5 times.

var str = "Hi";
var newStr = str.repeat(5);
console.log(newStr);  // HiHiHiHiHi


// Q-10 Print the first character of a string.

var str = "Hello";
var newStr = str.charAt(0); 
console.log(newStr)   // H

// Q-11 Use template literals to print:"My name is Aman and I am 20 years old"
var mname = "Aman";
var age = 20;
var str = `My name is ${mname} and I am ${age} years old`;
console.log(str);  // My name is Aman and I am 20 years old
