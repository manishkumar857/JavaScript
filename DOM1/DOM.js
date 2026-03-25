//selection
let abcd = document.getElementById("abcd");
let ab = document.getElementsByClassName("a");

console.dir(ab)
console.dir(abcd)

let b = document.querySelector("h2")
let c = document.querySelectorAll("h2")

//text content access
 let e = document.querySelector("h2")
 e.innerHTML="<i>hey</i>"
 e.textContent="hello world"
 e.innerText="text"

 //attribute

 let at = document.querySelector("a")
 at.getAttribute("href");

 at.setAttribute("href","www.youtube.com")

  at.getAttribute("href");

  at.removeAttribute("href")

  //create element

  let h3 = document.createElement("h3")
  h3.textContent=" this is heading of size 3"

//   document.querySelector("body").append(h3)
document.querySelector("body").prepend(h3)

let h4 = document.createElement("h4")
h4.textContent="BCD"
document.querySelector("div").appendChild(h4)


//styling using js

h4.style.color="red"
h4.style.background = "yellow"

h3.classList.add("f")
// h3.classList.remove("f")
// h3.classList.toggle("f")