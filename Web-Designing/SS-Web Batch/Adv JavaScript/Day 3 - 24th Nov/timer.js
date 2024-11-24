var t1 = setTimeout(()=>{console.log("After 2 seconds");},500);
console.log(t1+"Done!");

console.time("timer1");
var t2 = setTimeout(()=>{console.log("After few seconds");}, 5000);

// Blocking Code
for (let i =1; i<1e9; i++) {}

var id = setInterval(()=>{console.log("Interval Hello");}, 500);

console.log(t2 + "Done!");
console.timeEnd("timer1");

var t3 = setTimeout(()=> {console.log("Hello");}, 10000);

setTimeout(()=>{
    clearTimeout(t3);
    console.log(t3 + " timer cleared!");
}, 500);

setTimeout(()=> { clearTimeout(id)}, 5000);

