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

const helloslic = gameName.slice(-8,5)
console.log(helloslic)

const newstringone = "    Manish     "
console.log(newstringone)
console.log(newstringone.trim()) //remove the spaces from start and end

const url = "www.youtube-com"
console.log(url.replace("-","."))
console.log(url.includes("sundar")); //check if word is present or not
console.log(url.includes("youtube"));
console.log(url.split("-"))

