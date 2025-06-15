//Window object - automatically created by browser , not by js
//Document object is a part of window object
//console.log -> print html version
//console.dir -> print object in console

console.dir(document);
console.dir(document.body);
console.log(document.body);
document.body.style.background="pink";

console.dir(document.body.childNodes[1]);

document.body.childNodes[1].innerText = "Heading Changed";

let heading = document.getElementById("heading");
console.dir(heading);

let class1 = document.getElementsByClassName("back");
console.dir(class1);

let para = document.getElementsByTagName("p");
console.dir(para);

//query selector

// let firstelement = document.querySelector("p");//return matching first element
// console.dir(firstelement);

// let allelement = document.querySelectorAll("p"); //return all matching element
// console.dir(allelement);

// let firstelement = document.querySelector(".back");//return matching first element
// console.dir(firstelement);

// let allelement = document.querySelectorAll(".back"); //return all matching element
// console.dir(allelement);

let firstelement = document.querySelector("#heading");//return matching first element
console.dir(firstelement);


//dom manipulation

console.dir(firstelement.tagName);

console.dir(document.querySelector("body").children);
console.dir(document.querySelector("body").firstChild);
console.dir(document.querySelector("body").lastChild);


let bd = document.querySelector("body");
console.dir(bd.innerText); //pure text
console.dir(bd.innerHTML); //text with html content 


let h1 = document.querySelector("h1");
h1.innerHTML="<i>heading changed again</i>"

let h2=document.querySelector("h2");
console.dir(h2.innerText);

console.dir(h2.textContent); //display hidden content as well