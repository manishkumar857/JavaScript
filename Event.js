let btn1 = document.querySelector("#btn1")
// btn1.onclick = () =>{
//     console.log("handler 1")
// }

// // inline handle << Js handle


// //event object
// btn1.onclick = (e) =>{
//     console.log("handler 2")
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.clientX)
//     console.log(e.clientY)
// }

//second handler is preferred.
const handler5 = ()=>{
    console.log("handler 5 ");
}

btn1.addEventListener("click",()=>{
    console.log("handler 1 ");
})
btn1.addEventListener("click",()=>{
    console.log("handler 2");
})
btn1.addEventListener("click",()=>{
    console.log("handler 3");
})
btn1.addEventListener("click",()=>{
    console.log("handler 4");
})
 
btn1.addEventListener("click",handler5)

btn1.removeEventListener("click",()=>{
    console.log("handler 3");
}) // i will not work , callback reference should be same but its different in memory for this.


btn1.removeEventListener("click",handler5)


//dark mode

let buttonm = document.querySelector("#mode");
let currMode = "light";

buttonm.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").classList.add("dark"); //implementing with classes
        document.querySelector("body").classList.remove("white");
    }else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").classList.add("white");
        document.querySelector("body").classList.remove("dark");
    }
})