//Que 41
//  Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let megiciansArray = ["salman", "noman", "sami"];
function show_magicians(magician) {
    for (let eachMagician of magician) {
        console.log(eachMagician);
    }
}
show_magicians(megiciansArray);
export {};
