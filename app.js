console.log('Starting app.');

//trying to access fs module
const fs = require('fs');
const os = require('os');
//accessing file in same directory
const notes = require('./notes.js');

var sum = notes.addNum(2,5);
console.log(sum);

//var user = os.userInfo();
//
////template String
//fs.appendFileSync('greetings.txt', ` Hello ${user.username}!. Your age is ${notes.age}.`);