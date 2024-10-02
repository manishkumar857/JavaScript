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


