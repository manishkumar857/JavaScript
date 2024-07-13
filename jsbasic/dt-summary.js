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
console.log(typeof outsideTemp);

//type of datatype of null value is object


//non primitive type of is object only and for function is function object


//stack(Primitive, a copy is given) , heap(Non primitive,original is given)
let myytname = "abc"
let another = myytname
another = "lcd"
console.log(myytname);
console.log(another);

let user = {
    email:"abc@gmail.com",
    upi:"abc@ybl"

}
let user2 = user

user2.email="bcb@gmail.com"

console.log(user.email);
console.log(user2.email);