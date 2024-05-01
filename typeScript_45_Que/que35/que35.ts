//Que 35

//Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

let animals: string[] = ["cat", "rabbit", "dog"];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}
//• Modify your program to print a statement about each animal, such as A dog would make a great pet.

for (let i = 0; i < animals.length; i++){
    console.log(`"${animals[i]}" is my favourite Pet`)
}
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

console.log("\n These animals are are all have the good emotions and can make my babies happy because they are human friendly")