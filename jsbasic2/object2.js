//const tinderuser = new object()

const tinderuser = {}

tinderuser.name = "Manish"
tinderuser.age = "22"
tinderuser.isLoggedin = false

console.log(tinderuser)

const details = {
    email : "abc@gmail.com",
    fullname : {
        username : {
            firstname : "Manish",
            lastname : "Jangra"
        }
    }
}

    console.log(details.fullname.username.lastname)

const obj1  = {1:"a",2:"b"}
const obj2  = {3:"a",4:"b"}
const obj3  = {5:"a",6:"b"}

//const obj4 = {obj1,obj2}
//console.log(obj4)

// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)

const obj4 = {...obj1,...obj2} // spread operator
console.log(obj4)

const user = [
    {
        id:"2",
        email:"abc"

    },
    {
        id:"3",
        email:"abcd"

    },
    {
        id:"4",
        email:"abcg"

    }
]

console.log(user[0].id)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isLoggedin')) //check if object has this property or not

const course ={
    course : "mba",
    id : "5",
    courseinstructor : "ABC"
}

//course.courseinstructor
const{courseinstructor : ins} = course //object destructoring
//console.log(courseinstructor);

console.log(ins);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } //not object treated as json for api concept

[
    {},
    {},
    {}
]
