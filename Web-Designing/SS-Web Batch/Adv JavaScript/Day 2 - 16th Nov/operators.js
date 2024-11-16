// Unary = + - 
const a  = 10
console.log(-a);
const b=-20;
console.log(-b);

// Operator precedence follows BODMAS
const v1 = 3*4+2*6/2;
console.log("3*4+2*6/2==>",v1); //18
const v2 = 3*(4+2)*6/2;
console.log("3*(4+2)*6/2==>",v2); //54

// Assignment Operator
let x = 1, y=2;
let z = 3 - (x = y + 1)
console.log("x ==>", x); //3
console.log("z ==>", z); //0

// Short hand operator
let p=10;
p+=20;
console.log("p==>", p); // p = p + 20

// Increment and Decrement operator ++ / --
// a1++  a1 = a1+1
let a1 = 10;  //10
a1++; // post increment //11
a1++; //12
console.log("a1==>", --a1); // o/p= 11 a1=11
console.log("a1==>", a1--); // o/p=11 a1=10

var p1 =3;
var q =2;
var r = 6;

console.log(p1 * q + r++ / q);
// 3 * 2 + 6 / 2
// 3 * 2 + 3
// 6 + 3
// 9
console.log(++p1 * (q + r++) / q);
// 4 * (2 + 7) / 2
// 4 * 9 / 2
// 4 * 4.5
// 18

// Comparision Operators >, >=, ==, <, <=, !=, <>
console.log(2>1); // true
console.log(2==1); // false
console.log(2!=1); // true

console.log("Z" > "A"); //true 90 > 65
console.log("a" > "A"); // false 97 > 65
console.log("Glow" > "Glee"); //true

console.log("2" > 1); // true
console.log(false == 0); // true
console.log("" == false); // true

// Strict equality (===)
console.log(false === 0); // false
console.log("" === false); // false

// strict non-equality !==
console.log(false !== 0); //true

console.log("null == undefined==>",null == undefined); //true
console.log("null === undefined ==> ", null === undefined); // false

// Logical Operators ||, &&, !
console.log(true || true); // true
console.log(true || false); // true
console.log("false || true ==> ", false || true); // true
console.log("false || false ==>", false || false); //false

console.log("2 || 1==>", 2 || 1); //2
let x1=10
console.log("2 || (x1=20) ==>", 2 || (x1=20)); // 2
console.log("x1==>",x1); // 10

console.log("h" || 10); //h
console.log("" || 10); //10

console.log(null || 10); // 10
console.log(null || 0 || 10); // 10
console.log(undefined || null || 0 || 10); //10
console.log(null || 0 || undefined); //0

// Input username. Display it in console. If user name is empty show anonymous User
let username = prompt("Enter your name:");
if (username === "" || username === null){
    username = "Anonymous"
}
console.log(username);

username = prompt("Enter your name:");
console.log(username || "Anonymous");

// Null coleascing ??
console.log(null ?? 10);
let h=0;
console.log(h ?? 10);
console.log(undefined ?? 10);

// && operator
console.log(true && true); // true
console.log(true && false); // false
console.log("false && true ==> ", false && true); // false
console.log("false && false ==>", false && false); //false

console.log(1 && 0);  //0
console.log(1 && 3); //3
console.log(5 && null); // null
console.log(1 && null && 3 && 6); //null
console.log(1  && 3 && 6); //6
console.log(1 && null && 3 && 6 && 0); //null

// Not operator !
console.log(!true); //false
console.log(!false); //true
console.log(!0); // true
console.log(!""); // true
console.log(!!null); //false

// Ternary OPerator  condition ? yes value : no value
const d = new Date();
let time = d.getTime();
console.log(time > 12 ? "Good Afternoon" : "Good Morning");





































