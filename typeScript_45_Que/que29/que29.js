// Que29
//Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["banana", "mangeo", "litchi"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana");
}
;
if (favorite_fruits.includes("mangeo")) {
    console.log("I also like mangeo");
}
;
if (favorite_fruits.includes("litchi")) {
    console.log("I also like litchi");
}
;
if (favorite_fruits.includes("guava")) {
    console.log("I also like guava");
}
;
if (favorite_fruits.includes("orange")) {
    console.log("I also like orange");
}
;
export {};
