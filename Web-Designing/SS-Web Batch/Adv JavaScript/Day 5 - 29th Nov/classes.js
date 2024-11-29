// Class classname{
// properties - variables inside class
// functionality - functions inside class
// constructor - to allocate memory to the object
// }

class User{
    age = 10;
    constructor(n){
        this.name = n;
    }
    sayHi() {
        console.log("Hi " + this.name);
    }
}
// ClassName - Camel Case
// obj name - lower case at start className
let user = new User("Hunarho");
console.log(user.name);
console.log(user.age);
console.log(user);
user.sayHi();

console.log(typeof user);
console.log(typeof User);

