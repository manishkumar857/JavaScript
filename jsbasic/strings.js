const name ="Manish"
const repoco = 50
console.log(name+repoco+"value");

console.log(`my name is ${name} and my repo count is ${repoco}`)

const gameName = new String("Hello World")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.__proto__) //function protype
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const hello = gameName.substring(0,5)
console.log(hello)

const helloslic = gameName.slice(-8,4)
console.log(helloslic)