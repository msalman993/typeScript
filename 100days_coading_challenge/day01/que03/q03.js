//Que # 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const perName = "sALman kHAN";
console.log(`Name in lowerCase : ${perName.toLowerCase()}.`);
console.log(`Name in upperCase : ${perName.toUpperCase()}.`);
// now for title case
let step_1 = perName.split(` `);
let step_2 = step_1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step_3 = step_2.join(` `);
console.log(`And name in titleCase is : ${step_3}.`);
export {};
