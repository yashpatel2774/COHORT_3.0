// Q-1 Create variables of type string, number, boolean, null, and undefined.

var mname = "Yash";  // type String
var num = 7;      // type number
var bool = true;  // type boolean
var something = null;  // type null
var city = undefined;  // undefined


// Q-2 Check the type of different variables using typeof.

var mname = "Yash";
console.log(typeof(mname))  // type String

var num = 7;     
console.log(typeof(num))  // type number

var bool = true;  
console.log(typeof(bool))   // type boolean


var something = null;  
console.log(typeof(something))  // type null,   but datatype is Object

var city = undefined;  
console.log(city)  // undefined


// Q-3 Store your mobile number in a variable and check its type.

var mobNum = 3202002002;
console.log(typeof(mobNum));  // number


//Q-4 Create a variable with value null and check its type.

var someVal = null;  
console.log(typeof(someVal));  // type null,   but datatype is Object


// Q-5 Create a bigint number and print it.

var bigNum = 10n;
console.log(bigNum);  // 10n
console.log(typeof(bigNum));  /// bigint


