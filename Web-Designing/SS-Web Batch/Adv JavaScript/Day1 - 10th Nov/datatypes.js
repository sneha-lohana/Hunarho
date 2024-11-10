// Number
    // int
    let n = 10;
    console.log("n==>  ", n);

    // float
    n=12.34;
    console.log("n==>  ", n);

    // Infinity
    console.log(1/0);
    // -Infinity 
    console.log(-1/0);

    // NaN - Not a number
    console.log("hello"/0);

    console.log('"1" + 2 ==> ', "1" + 2); // 12
    console.log('1 + "2" ==> ', 1 + "2"); // 12
    console.log('1 + 1 + "2"==>', 1 + 1 + "2"); // 22
    console.log('"1" + 1 + 2 ==> ', "1" + 1 + 2); // 112
    
    let x = "10";
    console.log('+x ==> '+x); //+10
    console.log(Number(x));
    
    console.log('x + 40 ==> ', x + 40); //1040 1050
    console.log('+x + 20 ==>', +x + 20); //1030
    console.log(Number(x) + 20);

    console.log(+"sneha");

    let i = NaN;
    let i1 = 10n;

    console.log(typeof i);
    console.log(typeof i1);
    
// String
 var uname = "Sneha";
 console.log('Helllo ' + uname);
 console.log("Hello " + uname);

//  Template string
var str = `
<div>
    Hello ${uname}
    ${4+5}
    ${Math.random()}
</div>
`
console.log(str);

// Boolean
a = true;
b = false;

console.log(a);
console.log(b);

console.log(typeof a);

// Object
var stud = {
    name: "Sneha",
    true: 1,
    marks: {
        math: 99,
        science: 78,
        ai: 99
    }
}

console.log(stud);
console.log(stud.name);
console.log(stud["true"]);
console.log(stud.marks.science);
console.log(stud.marks["ai"]);
console.log(typeof stud);
console.log(typeof stud.name);

// null
const ab = null
console.log(ab);
console.log(typeof ab);

// undefined
y = undefined;
console.log(y);
console.log(typeof y);

