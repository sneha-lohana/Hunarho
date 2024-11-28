function User(name){
    this.name = name;
    this.sayHi = function(){
        console.log("Hi " + this.name);
    }
}

const user = new User("Ashish");
console.log(user);
user.sayHi();

// Object through a constructor function
// 1. new keyword allows to create empty object and assign this to it
// 2. this add new properties 
// 3. values that can be returned using this

function MyUser(){
    this.name = "MyName";
    return {age:20};
}

muUser = new MyUser();
console.log("muUser=>", muUser);
// If you return object from the function, this keyword gets discarded


function MyUser1(){
    this.name = "MyName";
    return 1;
}
// If you return any primitive datatype value, then this object will be returned

muUser1 = new MyUser1();
console.log("muUser1=>", muUser1);

console.log(typeof User);