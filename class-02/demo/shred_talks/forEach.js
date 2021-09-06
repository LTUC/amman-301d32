"use strict";

let numbers=[1,2,3,4,5,6]

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
let callBackFunction=(value,i)=>{
    // 1
    console.log("The value: ",value)
    console.log("The Index: ",i);
}
numbers.forEach(callBackFunction);
// numbers.forEach(item=>{
//     console.log(item)
// });