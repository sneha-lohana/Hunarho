for (let index=0; index<document.body.childNodes.length; index++){
    console.log(document.body.childNodes[index]);
}

// First element in the childNode
console.log(document.body.childNodes[0]);

console.log(document.body.firstChild);

// Last child
console.log(document.body.childNodes[document.body.childNodes.length-1]);
console.log(document.body.lastChild);

console.log(document.body.parentNode);
console.log(document.body.parentElement);
console.log(document.body.nextSibling);
console.log(document.head.nextSibling);
console.log(document.head.nextElementSibling);
console.log(document.body.previousElementSibling);

// getElementByID, GetElementByTag, getElementByClassName
// querySelector
// tag - direct text li
// class - .classname
// id - #name

console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelector("li.menu-item"));
console.log(document.querySelectorAll("li.menu-item"));
console.log(document.querySelectorAll("#menu"));
console.log(document.querySelectorAll("ul#menu"));













