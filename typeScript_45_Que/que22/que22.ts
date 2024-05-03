// Que 22
//If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let students: string[] = ["salman", "shahqib", "saml"];
console.log(students[3]);//As arrays are zero indexed so index 3 does not exist
students[2] = "sami"; // Correcting the error (sami instead of saml) by accessing a valid index
console.log(students[2]); // Now printing the correct name