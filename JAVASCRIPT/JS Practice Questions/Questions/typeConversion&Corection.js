// Q-1 Convert the string "50" into a number.

var num1 = "50";
console.log(Number(num1));  // 50   , as number

// Q-2 Convert the number 100 into a string.

var num2 = 100;
console.log(String(num2)); // 100 , as a string

// Q-3 Convert "true" into a boolean.

var bool1 = "true";
console.log(Boolean(bool1)); // true


// Q-4 Check the output of:

console.log("5" + 2);  // 52
console.log("5" - 2);  // 3
console.log(true + 1); // 2


// Q-5 - Create a variable with value `"123abc"` and
//  convert it into a number.

var someNum = "123abc";
console.log(Number(someNum));  // NaN


// Q-6 Use parseInt() on "500px".

var str = "500px";
console.log(parseInt(str));  // 500 , it only extract the interger
//  or number as a decimal