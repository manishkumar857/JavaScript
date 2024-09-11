//array
 const myarr = [1,2,3,4,5]
 const myarr2 = ["hello","world"]

 console.log(myarr);
 console.log(myarr[2]);
 console.log(myarr2);

 const arr = new Array(2,3,5,7)
 console.log(arr);
 console.log(arr[1]);
 
//Array Methods
arr.push(8)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(10)
console.log(arr) // add at the starting of the array
arr.shift()
console.log(arr) // removes at start of array

console.log(arr.includes(2))
console.log(arr.indexOf(3))

const newArr = arr.join() // Adds all the elements of an array into a string, separated by the specified separator string
console.log(arr)
console.log(newArr)


// slice ,splice

//console.log("A",arr)
//const myn1 = arr.slice(1,3)
//console.log(myn1)

//console.log("B",arr) // this states that it  slice make changes in original array 


const myn2 = arr.splice(1,2) // (start , no of element you want to delete after start)
console.log("C",arr)
console.log(myn2)