const arr = [5, 6,15, 25, 20, 1]
for (var x=0; x< arr.length; x++)
{
    console.log(arr[x])
}

console.log("Callback function using inline function");

var cb = function(value, index, array){
    console.log(value)
};
arr.forEach(cb);

console.log("Callback function using anonymous fucntion");
arr.forEach(function(value){
    console.log(value);
});

console.log("Callback function using arrow function");
arr.forEach((val)=>console.log(val));

// Identify and print even numbers in the array arr
var evenArr = []
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0)
    {
        evenArr.push(arr[i]);
    }
}
console.log(evenArr);

console.log("Arrow Function and ternary operator");
arr.forEach((val)=>val%2==0?console.log(val):"");

// filter function
var evArr =  arr.filter(function(value){
    return value%2==0;
});
console.log(evArr);

console.log(arr.filter((val)=>val%2==0));

// Array of objects
const products = [
    {
        id: 1,
        name: "Apple iPhone 15",
        price: 57999
    },
    {
        id: 2,
        name: "Samsung M05",
        price: 7093
    },
    {
        id: 3,
        name: "Samsung Galaxy S23 5G",
        price: 38999
    }
]

console.log("Display all the product that are 35000 or above");
console.log(products.filter((prod)=>prod.price > 35000));

// Find function
console.log(products.find((prod)=>prod.id == 2));

// find can work with any condition, but it retursns the 1st matching value
console.log(products.find((prod)=>prod.price > 35000));

// Map function
console.log(arr);
console.log(arr.map((val)=>val*val));






