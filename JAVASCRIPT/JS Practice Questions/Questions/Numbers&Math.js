// Q-1 Round 4.7 using Math.round().

var num = 4.7;
console.log(Math.round(num));  // 5  

// Q-2 Find the square root of 81.

console.log(Math.sqrt(81));  // 9

// Q-3 Find the maximum number from 10, 20, 5, 99.

console.log(Math.max(10, 20, 5, 99));  // 99

// Q-4 Generate a random number between 1 and 10.

var randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // 7

// Q-5 Convert "99.99" into an integer.

var num = "99.99";
console.log(parseInt(num));  // 99
console.log(Math.floor(Number(num)));  // 99


// Q-6 Check whether 25 is an integer or not.

var num = 25;
console.log(Number.isInteger(num));  // true
console.log(Number.isInteger("25"));  // false


// Q-7 Use toFixed(2) on 3.141592.

var num = 3.141592;
console.log(num.toFixed(2));  // 3.14