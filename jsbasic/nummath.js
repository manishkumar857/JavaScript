const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString());
console.log(typeof(balance));
console.log(typeof(score));

console.log(balance.toString().length)
console.log(balance.toFixed(2)); // defining the decimals after number 

const othernumber  = 123.445654
console.log(othernumber.toPrecision(4)); //defining decimals in number

const hunderds =10000000
console.log(hunderds.toLocaleString('en-IN')); // PUTING The commas in between digit according to Indian style



// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-1.4)) //returns the psotive value
console.log(Math.round(4.4));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,5,3,1))
console.log(Math.max(4,6,10,9));


console.log(Math.random()); // gives random values between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




