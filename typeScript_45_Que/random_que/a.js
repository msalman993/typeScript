class User {
    static staticId = 0;
    id;
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = ++User.staticId;
    }
}
const u1 = new User("salman", 24);
console.log(u1);
const u2 = new User("salman", 24);
console.log(u2);
const u3 = new User("salman", 24);
console.log(u3);
export {};
