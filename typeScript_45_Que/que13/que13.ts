// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//solving que through for-in loop

let favVehicles : string[] = ["Ferrari", "Bently", "Bmw"];
for (let val in favVehicles){
    console.log(`I would like to own a "${favVehicles[val]}".`)
}