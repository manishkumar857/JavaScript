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

