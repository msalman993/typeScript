// Tests using the lower case function

console.log("Tests using the lower case function")

let str1 = "salman";
let str2 = "khan";
console.log(str1 !== str2) // for true
console.log(str1 === str2) // for false

// Tests using the lower case function

console.log("Tests using the lower case function")

let st1 = "salman";
let st2 = "SalMAn";
console.log(st1 === st2.toLowerCase()); // true
console.log(st1 === st2) // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Numerical tests involving equality and inequality")

let num1 = 22;
let num2 = 33;
console.log(num1 !== num2); // false;
console.log(num1 === num2); // true;

console.log("greater than and less than")

console.log(num1 < num2); // True
console.log(num1 > num2); // false

console.log("greater than or equal to and less than or equal to");
console.log(num1 <= num2); // true;
console.log(num1 >= num2); // false

// Tests using "and" and "or" operators

console.log('Tests using "and" and "or" operators')

console.log(num1 <= num2 && st1 !== st2) // && (as here both statements are true so it will return true)
console.log(num1 > num2 || st1 === st2) // || (OR) (if one or both are true it will retunr true but here both are false so it will return false)

// Test whether an item is in a array;

console.log("Test whether an item is in a array;")

let array: any = ["salman", "noman", "sami"];
console.log(array.includes("salman")) // true;
console.log(array.includes("khan")) // false;

// Test whether an item is not in a array

console.log("Test whether an item is not in a array")

console.log(!array.includes("salman")) // false;
console.log(!array.includes("khan")) // true;