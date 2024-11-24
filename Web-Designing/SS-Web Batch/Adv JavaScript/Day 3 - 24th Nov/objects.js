function makeUser(name, age){
    return {
        // name: name,
        // age : age -> Shorthand property syntax
        name, age
    };
}

var u1 = makeUser("Sneha", 34);
console.log(u1);
console.log(u1.name);

var u2 = {}

// in operator to check the property name in an object
console.log('"name" in u1 ===> ', "name" in u1);
console.log('"name" in u2 ===> ', "name" in u2);
console.log(u2.name);

var u3 = {
    name: undefined
}

console.log('"name" in u3 ===> ', "name" in u3);
console.log(u1.name === undefined);
console.log(u2.name === undefined);
console.log(u3.name === undefined);

// This Keyword
console.log(this);

function sayHi(){
    console.log("SayHi ==>", this);
}
sayHi();

const sayHello = () => {
    console.log("SayHello ==>", this);
}
sayHello();

const user = {
    name: "Sneha",
    age: 34,
    sayHi: function(){ console.log("user.sayHi ==> ", this);
    },
    sayHello: ()=>{console.log("user.sayHello ==>" , this)}
}

console.log(user);
user.sayHi();
user.sayHello();

// Arrow functions in detail
const group={
    title: "Mr",
    names: ["Deepraj", "Atharva", "Harsh", "Ashish"],
    showUsers: function(){
        this.names.forEach(function(name){
            console.log(this.title + name);
            // console.log(this); 
        });

        this.names.forEach((name)=>console.log(this.title + name));
    }
}

group.showUsers();

// Object Chaining in detail

const u4 = {
    name: "Ashish",
    age: 38,
    address : {
        city: "Mumbai"
    }
}
console.log(u4.address.city);

const u5 = {}
// const u5 = null;
// const u5 = undefined;

// ?. = 
// console.log(u5.address.city);
console.log(u5?.address?.city);
console.log(u4?.address?.city);

