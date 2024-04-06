//Que # 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names = ["Shaqib", "Sami", "Asad", "Hasnain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("\n");
//it can also be coade through for-loop as;
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
console.log("\n");
// It can also be coade thruogh for-of loop as;
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var eachName = names_1[_i];
    console.log(eachName);
};
