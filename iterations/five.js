const coding  = ["js","ruby","java"]

coding.forEach(function(val){
    console.log(val)
})

coding.forEach((item)=>{
    console.log(item)
})

function printitem(item){
    console.log(item)
}

coding.forEach(printitem)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)

})

const mycoding = [
    {
        languagename:"javascript",
        file:".js"

    },
    {
        languagename:"python",
        file:".py"

    },
    {
        languagename:"Java",
        file:".java"

    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename," ",item.file)
})
