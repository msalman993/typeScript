let cities = ["Karachi", "Peshawar", "Islamabad", "Lahore"];
// Using for-of loop;
for (let city of cities) {
    console.log(`I love ${city}`)
};
//solving same que using for-each loop;
console.log(`\nsolving same que using for-each loop\n`)

cities.forEach(cities => {
    console.log(`I love ${cities}`)
}) 