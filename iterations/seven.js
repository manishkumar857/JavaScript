const mynum = [3,4,1,8,6,0,1]

const nw = mynum.map((num)=>{return num+10}) //curly brackets or scope means we have to give return statement
console.log(nw);

const newNums = mynum
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>13)

console.log(newNums);
