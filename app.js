console.log('Starting app.');

//including default node module
const fs = require('fs');
const os = require('os');

//including third part module
const _ = require('lodash');

//accessing file in same directory
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
let filteredArray = rs_.uniq(['Andrew',1,2,3,4,1,2,'Andrew']);
console.log(filteredArray);

//var sum = notes.addNum(2,5);
//console.log(sum);

//var user = os.userInfo();
//
////template String
//fs.appendFileSync('greetings.txt', ` Hello ${user.username}!. Your age is ${notes.age}.`);