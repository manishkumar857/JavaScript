let student ={
    name: "Ravi",
    age: 23,
    isGraduated: true  
}


//nested objects
console.log(student["name"])

let user = {
    name : "Amit",
    age:24,
    studentdetails : {
        studentid : 343,
        marks :100,
    }
}

console.log(user.studentdetails.marks)

//objects destructing

let {name ,age}= user;

console.log(name)
console.log(age)

//using different variable name destructing

let{ age : details  } = user

console.log(details)

//nested destructing
let { studentdetails : {studentid}} = user;

console.log(studentid)


//loopin through objects

for(let key in user){
    console.log(key,user[key])
}

console.log(Object.keys(user))
Object.entries(user)
Object.values(user)

// copying object

let lpu = {...user}
let newlpu = Object.assign({},user)

//deep copy

let deepcopy = JSON.parse(JSON.stringify(user))

//option chaining

console.log(user?.studentdetails?.mark)

//computed properties

let keyyy = "NAME"
let report = {
    [keyyy]:89
};