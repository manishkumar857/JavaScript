var c =300
if(true){
    console.log(c)
    var c=30
    
}
console.log(c)
//var changes inside block makes change outside block also

let a=40
const b=19
if(true){
   // console.log(a) //can't acess global let variable inside block
    let a =20 //can be accessed inside block only

    console.log(b) //can access const global variable inside block
    //const b =90 //cn't be redeclared
    //console.log(b) 
}
console.log(a)
console.log(b)

function one(){
    const username = "manish"
    function two(){
        const web = "www"
        console.log(username)
    }
    //console.log(web) //can't access it outside fun
    two()
}
one()


if(true){
    const username = "man"
    if(username=="man"){
        const wb="av"
        console.log(username+wb)
    }
    //console.log(wb) //willnot work outside block
}

//++++++++++++interesting+++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}

// addtwo(5)
// const addTwo =function(num){
//     return num+2
// } // we can't call this type of function  before defining the functiom