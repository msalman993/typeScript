// Que 26

// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color = "Green";

// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if (alien_color === "Green") {
    console.log("You have earned 5 points for shooting the alien")
};

//If the alien’s color isn’t green, print a statement that the player just earned 10 points.

if (alien_color !== "blue") {
    console.log("You have earned 10 points this time")
};

// Write one version of this program that runs the if block and another that runs the else block.

if (alien_color === "Green") {
    console.log("You have earned 5 points for shooting the alien")
}
else {
    console.log("You have earned 10 points this time")
};
// in this case my answer will print "You have earned 5 points for shooting the alien" because alien_color = Green.