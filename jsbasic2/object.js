//singleton term i have to rememeber
// for object create
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
 console.log(JsUser[mySym])

 JsUser.email ="abc@gmail.com"
console.log(JsUser.email);

//Object.freeze(JsUser)
//JsUser.email ="abcde@gmail.com"
//console.log(JsUser.email); // no change as object is freezed

JsUser.greeting = function(){
    console.log("Hello JS");
    
}
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo())