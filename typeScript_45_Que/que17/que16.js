/* que # 16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
// Starting from Exercise 15;
let guestList = ["shahqib", "sami", "asad"];
for (let list of guestList) {
    console.log(`Dear "${list}", \n I invite you for a dinner to night. Thank You.\n`);
}
;
console.log(`Unfartunately "${guestList[1]}" cannot attend Dinner Party due to some personal issues.`);
// excluding "sami" from above array list;
guestList[1] = "junaid";
// printing new array list;
console.log(`\n\t\t\tNEW LIST OF INVITITION\n`);
for (let newList of guestList) {
    console.log(`Dear "${newList}",\n I invite you for a dinner to night. Thank You.\n`);
}
;
console.log(`\t\t\tGood News! I found a bigger dinner table\n.`);
guestList.unshift("Salman Khan");
guestList.splice(2, 0, "Gulkhan");
guestList.push("Amir Khan");
for (let updatedList of guestList) {
    console.log(`Dear "${updatedList}",\n I invite you for a dinner to night. Thank You.\n`);
}
;
export {};
