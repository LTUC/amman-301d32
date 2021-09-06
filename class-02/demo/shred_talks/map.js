"use strict";

let numbers=[1,2,3,4,5,6];
console.log("=====before using map======");
console.log(numbers);

let multiTwoNumbers=numbers.map((item)=>{
    return item*2;
});
console.log("=====after using map======");
console.log(numbers);
console.log(multiTwoNumbers);
