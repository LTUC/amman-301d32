// Promises DECLARE functionality
// "Go ahead and do your work and let me know when you're done.  Meanwhile, I'm going to do other things."

// promise is a class in javascript

let longTask = (status) => new Promise((resolve, reject) => {
    let timer = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        if (status) {
            resolve(`food is ready (${status} / ${timer})`);
        } else {
            reject('promise was not satisfied');
        }
    }, timer);
});


// Just do this longTask one time ...
// Notice that code after this actually executes before this completes.
// longTask('shawerma').then(task => console.log('Task', task)).catch(console.error);
// longTask(false).then(task => console.log('Task', task)).catch(error => console.log(error));

// Running many async things individually (no guarantee of order)
// console.log('------- Individually ----------');
// longTask('shawerma').then(task => console.log('Task', task)).catch(console.error);

// longTask('kamikazi meal').then(task => console.log('Task', task)).catch(console.error);

// longTask('avocado cocktail').then(task => console.log('Task', task)).catch(console.error);

// longTask('waffles').then(task => console.log('Task', task)).catch(console.error);

// longTask(false).then(task => console.log('Task', task)).catch(console.error);


// Running many async things in a series -- These will always happen in order
// console.log('------- Chained ----------');
// longTask(false).then(data => {
//     console.log(data);
//     return longTask('c - 2');
// }).catch(error => console.log(error).then(data => { console.log(data); return longTask('c - 3'); })
//     .then(data => { console.log(data); return longTask('c - 4'); }).then(data => console.log('last one ' + data)));

// console.log('------- Chained tasks and adding catch----------');
// longTask(false).then(data => {
//     console.log(data);
//     return longTask('c - 2');
// }).catch(error =>{console.log(error); return longTask('c - 2')}).then(data => { console.log(data); return longTask('c - 3'); })
//     .then(data => { console.log(data); return longTask('c - 4'); }).then(data => console.log('last one ' + data));


// Running Many Async Things Simultaneously ... they may not all finish in order, but the collected responses will be GIVEN to you in order
// console.log('------- Promise.all() ----------');
// let stuffToDo = [];
// for (let i = 1; i <= 10; i++) {
//     stuffToDo.push(longTask(`pa - ${i}`));
// }
// Promise.all(stuffToDo)
//     .then(things => console.log('Promise.all() Response Array', things))
//     .catch(console.error);