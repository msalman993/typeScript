//Que # 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Shaqib", "Sami", "Asad", "Hasnain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//it can also be coade through for-loop as;
for(let i = 0; i<names.length; i++){
  console.log(names[i])
};
// It can also be coade thruogh for-of loop as;
for(let eachName of names){
  console.log(eachName)
};

