//        0   1   2  3      // indexs
var a = [10, 20, 30, 40]
console.log(a);  // [10, 20, 30, 40]
console.log(a[2]);  // 30
console.log(a[4]);  // undefined
// a[3] = 50;  /// replace index 3 element to this , like 40 replaced by 50
console.log(a.length) // 4

console.log(a.lastIndexOf(40))  // 3   or
console.log(a[a.length - 1]) ///40
console.log(typeof(a));   /// object

let arr = [10, 20, 30];
console.log(arr);  // [10, 20, 30]

arr.push(40); 
console.log(arr); // [10, 20, 30, 40]  add element at the last
arr.pop(); 
console.log(arr); // [10, 20, 30]  delete element at the last

arr.unshift(0);
console.log(arr) // [0, 10, 20, 30]  // add element at first index
arr.shift()
console.log(arr) // [10, 20, 30]  /// remove from first index

let arr2 = [10, 20, 60, 80, 50]
let ab = arr2.splice(1, 2)  // startindex, how many index delete

console.log(ab); // [20, 60]

arr2.splice(1, 1, 70);
console.log(arr2) // [10, 70 , 50 ]

let arr5 = [1,2 ,3 ,5];
let arr6 = [...arr5];
arr6.push(8);
console.log(arr5);
console.log(arr6);