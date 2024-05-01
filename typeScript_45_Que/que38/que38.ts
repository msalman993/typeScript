// Que 38

// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string) {
    console.log(`\n${city} is in ${country}.\n`)
};
describe_city("Peshawar", "Pakistan");
describe_city("IslamAbad", "Pakistan");
describe_city("Madina", "Soudi Arabia");