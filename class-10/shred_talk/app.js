"use strict";

// let shakeHands = list => {
//   for( let i = 0; i <= list.length - 1; i++ ) {
//     for( let j = 0; j <= list.length - 1; j++ ) {
//       if(list[i] !== list[j]) {
//         console.log(`${list[i]} shakes ${list[j]}'s hand.`);
//       }
//     }
//   }
// };

// let people = ['Kookla', 'Fran', 'Ollie'];
// /* 
// i            j
// 0            0 1 2
// 1            0 1 2
// 2            0 1 2
// */
// shakeHands(people);

// let drawGrid = (height,width) => {
//     for(let i = 1; i <= height; i++) {
//       let row = [];
//       let char = i === height ? ' ' : '_'; // On the bottom row, we need to use spaces instead of "_"
//       for(let j = 1; j <= width; j++) {
//         row.push(char);
//       }
//       console.log(row.join('|'));
//     }
//   };
//   drawGrid(3,3)


let drawTable = (table) => {
    for(let i = 0; i <= table.length - 1; i++) {
      let line = '';
      for(let j = 0; j <= table[i].length - 1; j++){
          line = line + table[i][j];
        // 2
        // 24
        // 246
        //2468
      }
      console.log(line);
    }
  };
  let a = [
    [2,4,6,8],
    [1,3,7,9],
    [4,3,8,6]
  ];
  
// table[0][0]  2
// table[0][1]  4 
// table[0][2]  6
// table[0][3]  3
// 2  4  6  3
// table[1][0]  1
// table[1][1]  3 
// table[1][2]  7
// table[1][3]  9
//  1 3 7 9
// table[2][0]  4
// table[2][1]  3 
// table[2][2]  8
// table[2][3]  6
  drawTable(a);


// const express = require('express');
// app.get('/username',( req, res) => {
//   let userInfo = {};
//   userInfo.name=req.query.username
//   userInfo.password=req.query.password
//   res.status(200).send(userInfo)
// })

// app.listen(8000,() => "Listening on Port 3000");