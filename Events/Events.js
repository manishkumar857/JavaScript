let p = document.querySelector("p");
p.addEventListener("click",function(){
    p.style.color= "red";
})

function db(){
    p.style.color="green"
}
p.addEventListener("dblclick",db)

//remove event listner

p.removeEventListener("dblclick",db)

//input

// let inp = document.querySelector("input")
// inp.addEventListener("input",function(){
//     console.log("typed")
// })

let inp = document.querySelector("input")
inp.addEventListener("input",function(dets){

    if(dets.data!==null){ //null when we press backspace
    console.log(dets.data)
    }
})

//change
let op = document.querySelector("select")
let dv = document.querySelector("#device")
op.addEventListener("change",function(dets){
    dv.textContent =`${dets.target.value} device selected `
    
})