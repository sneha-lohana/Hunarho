const a = 10;

function sayHi(){
    console.log("Hi");
}

function sayHello(){
    console.log("Hello");
}

const PI = Math.PI;

// Name declared export
export {sayHi, sayHello, PI}


// Default export
export default class User{
    constructor(name){
        this.name = name;
    }
}