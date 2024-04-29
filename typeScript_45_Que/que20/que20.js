var cities = ["Karachi", "Peshawar", "Islamabad", "Lahore"];
// Using for-of loop;
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    console.log("I love ".concat(city));
}
;
//solving same que using for-each loop;
console.log("\nsolving same que using for-each loop\n");
cities.forEach(function (cities) {
    console.log("I love ".concat(cities));
});
