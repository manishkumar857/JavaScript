//if
const isuerloggedin = true
const temp =40

if(temp===40){
    console.log("less than 50");
    
}else{
    console.log("temp greater than 40")
}

// <, >, <=, >=, ==, !=, ===, !==

const score =100

if(score<=100){
    let power ="fly"
    console.log(`user power : ${power}`)
}
//console.log(`user power is : ${power}`)

// const balance =1000
// if (balance > 100) {
//     console.log("greater than 100");
// }
// console.log("less than 100"); // not working


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedin && loggedinfromemail && 2===2){
    console.log("printing");
    
}
if(userloggedin && loggedinfromemail && 2==3){
    console.log("printing");
    
}
if(userloggedin && loggedinfromgoogle && 2===2){
    console.log("printing");
    
}
if (loggedinfromgoogle|| loggedinfromemail) {
    console.log("User logged in");
}
