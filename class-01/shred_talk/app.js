"use strict";

// Arrow functions
/* 
write a function that takes two numbers and returns the sum of those two nmumbers
*/
// Anon Function
// let sum=function(a,b){
//     return a+b;
// }

// Named functions
// function sum(a,b){
//     return a+b;
// }
// Arrow functions
// let sum=(a,b)=>{
//     return a+b;
// }


let button=document.getElementById("btn");
let greeting=()=>alert(`Hello World`);
button.addEventListener("click",greeting);


// CallBack function