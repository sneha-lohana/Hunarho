// String conversion
let value = true;

console.log(typeof value);
console.log(value);

value = String(value);
console.log(typeof value);
console.log(value);

console.log(" " + value);

value = "" + true;
console.log(value);
console.log(1 + true);
console.log(1 + false);

console.log(typeof null);
console.log(String(null));

console.log(String(undefined));
uname = "Sneha";

console.log(uname + null);
console.log(uname + undefined);

// Number conversion
console.log("6" * "2"); // 12 
console.log("abc" * "2"); // Nan

console.log("abc" / "2"); // NaN
console.log("6" + "2"); // 62

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Number(undefined)); //Nan
console.log(Number(null)); // 0

// Boolean Conversion
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("abc")); //abc true
console.log(Boolean(null)); //true false
console.log(Boolean("")); //false
console.log(Boolean(undefined)); //true
console.log(Boolean(Infinity)); //true
console.log(Boolean(NaN)); //false
console.log(Boolean("0")); //false










