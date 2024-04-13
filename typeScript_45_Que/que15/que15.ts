// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Starting from Exercise 14;
let guestList : string[] = ["shahqib", "sami", "asad"];
for (let list of guestList) {
    console.log(`Dear "${list}", \n I invite you for a dinner to night. Thank You.\n`)
};
 console.log(`Unfartunately "${guestList[1]}" cannot attend Dinner Party due to some personal issues.`);

// excluding "sami" from above array list;

guestList[1] = "junaid";

// printing new array list;

console.log(`\n\t\t\tNEW LIST OF INVITITION\n`);
for (let newList of guestList) {
    console.log(`Dear "${newList}",\n I invite you for a dinner to night. Thank You.\n`)
};