document.body.myData = {
    name: "abc"
};

console.log(document.body.myData);
document.body.sayHi = () => {
    console.log("Hi");
};

console.log(document.body.id);
console.log(document.body.something);

console.log(document.body.hasAttribute("id"));
console.log(document.body.hasAttribute("something"));
console.log(document.body.getAttribute("something"));

document.body.setAttribute("style", "background-color:yellow");
document.body.removeAttribute("style");

const check = document.getElementById("my-input");
console.log(check.checked);
console.log(check.getAttribute("checked"));

let d1 = document.createElement("li");
d1.innerHTML = "Hi";
d1.style.color = "Red";
console.log(d1);

const msg = document.getElementById("msg-cntr");
msg.append(d1);

let d2 = document.createElement("li");
d2.innerHTML = "Hello";
d2.style.color = "blue";

msg.prepend(d2);

let d3 = document.createElement("div");
d3.innerHTML = "Good Evening";

msg.before(d3);

let d4 = document.createElement("h1");
d4.innerHTML = "Bye Bye!"

msg.after(d4);

setTimeout(()=> {
    d2.remove();
}, 5000);


