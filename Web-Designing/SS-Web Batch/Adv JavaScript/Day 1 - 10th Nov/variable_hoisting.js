console.log("Hello JavaScript");

// alert(
//     1
//     +
//     2);

// [1, 2].forEach(alert);

var arr = [1, 2]
for (var i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}

// Variable are Dynamic Types

var a = 10;
console.log("a ==> ", a);

a = "Hunarho";
console.log("a ==> ", a);

a = true;
console.log("a ==> ", a);

// Input from the user
// var uname = prompt("Enter your name:")
// console.log("uname ==> ", uname);

// // Input in form of Yes or No
// isDelete = confirm("Are you sure you want to delete?");
// console.log(isDelete);

// More on Variables (Defining Variables):
var x = 10; // Declaring 
x=20; //Updation
var x = 30; 
console.log(x); //Redeclaring

let y = 20;
y = 50;
// let y = 100;  //Redeclaring is not allowed with let
console.log(y);

const z = 10;
// z=20;
// const z = 30;
// Neither updation nor redeclaration is allowed with const
console.log(z);

// Variable Hoisting

b = 20;
console.log("b ==> ", b);
var b;

// temporal deadzone
// console.log(p);
let p = 20;
console.log("p ==> ", p);

// Identifers

var userName = "Sneha"; // camel-case
var _username = "Sneha"; // start with _
var $username = "Sneha"; // start with $
var _ = "sneha"; 
var $ = "sneha";
var img1 = "img.jpg";
var img$ = "img.jpg";
// var 1name = "sneha;"
// var user.name = "sneha";



