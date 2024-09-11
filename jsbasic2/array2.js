const marvel = ["thor","spiderman"]
const dc = ["superman","batman"]

//marvel.push(dc)
//console.log(marvel);
//console.log(marvel[2][1]);

//const allheroes = marvel.concat(dc)
//console.log(allheroes);

const newallheroes = [...marvel,...dc] //best method
console.log(newallheroes);

const arr3 = [1,2,[3,4],5,[8,9,[6,7]]]
narr3 = arr3.flat(Infinity) // flat array upto maximum recursion depth
console.log(narr3)


console.log(Array.isArray("Manish")) 
console.log(Array.from("Manish"))
console.log(Array.from({name : "Manish"}))

let score = 1
let score2 =2 
let score3 = 3
console.log(Array.of(score,score2,score3))
