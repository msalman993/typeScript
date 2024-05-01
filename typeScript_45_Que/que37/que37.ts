// Que 37

// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: number, text: string) {
    console.log(`size = "${size}"\ntext = "${text}"`)
}
console.log("\nPrinting large size shirt\n");
make_shirt(13, "I love TypeScript");
console.log("\nPrinting medium size shirt\n");
make_shirt(7, "I love TypeScript");
console.log("\nPrinting small size shirt\n");
make_shirt(3, "Salman");