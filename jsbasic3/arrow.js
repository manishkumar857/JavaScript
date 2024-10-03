const user ={
    username:"Manish",
    age:9,
    
    welcomemsg:function(){
        console.log(`${this.username},welcome to web`)
        console.log(this) //this refers to object
    }
}

user.welcomemsg()
user.username="Ajay"
user.welcomemsg()

// console.log(this)

// function chai(){
//     let username="manish"
//     console.log(this.username)
// }
// chai()

// const chai2 = function(){
//     let username ="nman"
//     console.log(this.username)
// }
// chai2() // undefined in both type of functions


// const chai3 = ()=>{
//     let username="manish"
//     console.log(this.username)
// }
// chai3() // still undefined fot this.

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }


// const addtwo =(num1,num2)=>num1+num2
// console.log(addtwo(3,4));

// const addtwo = (num1,num2)=>(num1+num2)
// console.log(addtwo(8,9))

const addtwo =(num1,num2)=>({name:"manish"})
console.log(addtwo(3,5))

