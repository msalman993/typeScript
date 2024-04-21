/* 18. Seeing the World: Think of at least five places in the world you’d like to visit.*/

let places = ["Makkah", "Madina", "Turkey", "Palastine", "Italy"];

/* Print your array in its original order.*/

console.log(places);

/*• Print your array in alphabetical order without modifying the actual list.*/

let alphabeticalOrder = places.slice().sort();
console.log(`\nArray in alphabetical order without modifying the actual list is `,alphabeticalOrder);

/*• Show that your array is still in its original order by printing it.*/
console.log(`\nNow I am giving array below in its original order`)
console.log(places);

/*• Print your array in reverse alphabetical order without changing the order of the original list.*/
let reverseAlp_order = places.slice().sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
console.log(`\nArray in reverse alphabitic order without modifying the actual list `,reverseAlp_order);

/*• Show that your array is still in its original order by printing it again.*/
console.log(`\nNow once again I am giving array below in its original order`)
console.log(places);

/*• Reverse the order of your list. Print the array to show that its
order has changed.*/

    places.reverse()
console.log(`\nArray in reverse order `,places);

/*• Reverse the order of your list again. Print the list to show it’s back to its original order.*/
    places.reverse()
console.log(`\nArray back to its original order by reversing once again `,places);


/*• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.*/

places.sort();
console.log(`\nArray sorted to Alphabetic order `,places);


/*• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
    places.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
console.log(`\nArray sorted to reverse alphabetic order `,places);

