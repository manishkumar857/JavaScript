//Window object - automatically created by browser , not by js
//Document object is a part of window object
//console.log -> print html version
//console.dir -> print object in console

console.dir(document);
console.dir(document.body);
console.log(document.body);
document.body.style.background="green";

console.dir(document.body.childNodes[1]);

document.body.childNodes[1].innerText = "Heading Changed";