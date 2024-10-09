const arr = [1,2,5,6,7]

for(const i of arr){
    console.log(i);
    
}

const greetings  ="Hello World"
for(const num of greetings){
    console.log(`greetings is ${num}`);
    
}

//Maps
const map = new Map()
map.set('in',"india")
map.set('np','nepal')
map.set('fr',"france")

//console.log(map)

for(const [key,value] of map){
    console.log(key,":",value);
    
}

// const myobject ={
//     'name':'manish',
//     'age':16
// }
// for(const [key,value] of myobject){
//     console.log(key,":",value);
// } //object is not iterable