console.log('Starting app.');

//trying to access fs module
const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFileSync('greetings.txt', ` Hello ${user.username}!`);