//Immediately Invoked function Expressions

(function chai(){
    //named IIFE
    console.log(`DB CONNNECTED`);
})();

((name)=>{
    console.log(`db connect two ${name}`)
})('manish')