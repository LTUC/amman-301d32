"use strict";

// function Cat(name, color, age){
//         this.name=name;
//         this.color=color;
//         this.age=age;
// }

// Cat.prototype.walking=function(){
//     console.log(`${this.name} is walking`);
// };
class Animal{
    constructor(type, colorOfEyes){
        this.type=type;
        this.colorOfEyes=colorOfEyes;
    }
}

class Cat extends Animal{
    constructor(name, color, age,type, colorOfEyes){
        super(type, colorOfEyes);
        this.name=name;
        this.color=color;
        this.age=age;
    }
    walking(){
        console.log(`${this.name} is walking`);
    }
    eating(){
        console.log("The cat is eating Gazal");
    }
}

class Lion extends Cat{
    constructor(name, color, age,type,colorOfEyes, height){
        super(name, color, age,type,colorOfEyes);
        this.height=height;
    }    
    eating(){
        console.log("The Lion is eating Gazal");
    }
}

class Tiger extends Cat{    
    eating(){
        console.log("The Tiger is eating buffalo");
    }
}

let simba=new Lion("Simba","Gold",5,"Lion", "Green",3);
let shehrukhan= new Tiger("Shehrukhan", "Orange", 10, "Tiger", "Blue");

simba.walking();
simba.eating();
console.log("color of eyes: ",simba.colorOfEyes);
console.log("Height: ", simba.height);
// shehrukhan.walking();
// shehrukhan.eating();
// console.log("color of eyes: ",shehrukhan.colorOfEyes);
// let max=new Cat("Max", "Black",2);
// let mishmish= new Cat("Mishmish","Orange", 3);

// console.log(max);
// max.walking();
// mishmish.walking();
// console.log(mishmish);

