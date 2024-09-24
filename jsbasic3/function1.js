function name(){
    console.log("M")
    console.log("J")
}
name()

function twonumber(n1,n2){
   // console.log(n1+n2)
   //return n1+n2
   let result = n1+n2
   return result
}
//twonumber(1,2)

const result = twonumber(1,6)
console.log(result);


function login(username){
    if(!username){ //if username not present
        console.log("please enter a username");
        return
    }

    console.log(`${username} just logged in`)
}

login("Manish")


//acting as a array to store all the inputs in single variable
function price(...var1){
    return var1
}
console.log(price(20,3,56,78))

function price2(var1,var2,...var3)
{
    console.log(var1)
    console.log(var2)
    console.log(var3)
}
price2(20,30,40,50)


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    name: "Manish",
    cgpa : 8.55
}

function handleobject( anyobject){
    return `name is ${anyobject.name} and cgpa is ${anyobject.cgpa}`
}
console.log(handleobject(user))

console.log(handleobject({
    name:"Jangra",
    cgpa:9
}))

const mynewarr = [1,2,3,4,5]

function handlearray(newarr){
    return newarr[1]
}
console.log(handlearray[mynewarr])
console.log(handlearray([5,6,7,8,9]))
