// Que 32


 let current_users: string[] = ["salman", "noman", "sami", "shaqib", "wisal"];
 let new_users: string[] = ["Salman", "atiq", "arif", "gulkhan", "wisal"];

for (let i of new_users) {
    if (current_users.includes(i.toLowerCase())) {
        console.log(`${i} is already taken. Choose another username`)
    }
    else {
        console.log(`${i} is available`)
    }
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. Done.
