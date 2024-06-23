class User {
    static staticId: number = 0;
    id: number;
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.id = ++User.staticId
    }
}
const u1 = new User("salman", 24);
console.log(u1);
const u2 = new User("salman", 24);
console.log(u2);

const u3 = new User("salman", 24);
console.log(u3);