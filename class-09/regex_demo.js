"use strict";

let str = "The rain in Spain falls mainly in the plain";
// let regex = /([A-Za-z]in)\b/g;
let regex = /([A-Za-z]in)\b/g;
console.log("Regex test result",regex.test(str))