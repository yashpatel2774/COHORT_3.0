// Q-1 Check whether an empty string is truthy or falsy.

var str = "";
console.log(Boolean(str));  // false


// Q-2 Check whether 0 is truthy or falsy.

var num = 0;
console.log(Boolean(num));  // false


// Q-3 Check whether [] is truthy or falsy.

var arr = [];
console.log(Boolean(arr));   // true


// Q-4 Create a variable and print "Valid" if it has a value otherwise print "Invalid".

var value = "Hello";

if (value) {
    console.log("Valid");   // this will run
} else {
    console.log("Invalid");
}

console.log(value ? "Valid" : "Invalid");  // Valid


