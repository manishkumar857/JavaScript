// based on how it is stored in memory and accessed

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt [basically changes in copy as call by value]

//Javascript can hold values with different data types in the same variable during runtime [dynamic],
// and it can perform operations between different data types without explicitly converting them before [weakly]

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // symbol makes unique

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //BigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
