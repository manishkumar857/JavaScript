// const coding = ['a','b','c','d','e']
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item; 
// })

// console.log(values)

// const mynum =[2,4,5,6,7,2,9]
// const newnum = mynum.filter((num)=>{
//     return num>4
// })

// console.log(newnum);

const mynums = [1,2,3,4,5,6,7,8]
const newnum=[]
mynums.forEach((num)=>{
    if(num>4){
        newnum.push(num)
    }
})
console.log(newnum) //other way of filter