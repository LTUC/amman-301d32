"use strict";

// let numbers = [2,3,4,5];

// let evenNumbers=numbers.filter(value=>{
//     return value%2===0
// });
// console.log("numbers: ",numbers);

// console.log("evenNumbers: ",evenNumbers);

let people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
  ];

  let filteredPeople=people.filter(person=>{
      return person.role !=='Kid';
  })
  let newPeopleArray=filteredPeople.map(person=>{
      return person.name
  })
  console.log(newPeopleArray);