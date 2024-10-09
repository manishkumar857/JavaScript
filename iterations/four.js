//iterations of objects
const myobj={
    'name':"Manish",
     'age' :19
}

for(const key in myobj){
    console.log(`${key} is ${myobj[key]}`);  
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } //not work for map