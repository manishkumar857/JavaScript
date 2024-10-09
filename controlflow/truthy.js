const email =[]
if(email){
    console.log("executed");
    
}
else{
    console.log("not executed");
    
}

const useremail =""
if(useremail){
    console.log("executed");
    
}
else{
    console.log("not executed");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("empty");
    
}
else{
    console.log("not empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1=5??10
console.log(val1)
val1=null??10
console.log(val1)
val1=null??10??20
console.log(val1)

//ternary operator
//condition ?true : false

const iceteaprice=100
iceteaprice<=80?console.log("80"):console.log("more");
