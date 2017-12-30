console.log('Starting app.');

//trying to access fs module
const fs = require('fs');

//Option one
fs.appendFile('greetings.txt', 'Hello World!',function(err){
    if(err){
        console.log('Unable to write to file');
    }
});

//Option two
fs.appendFileSync('greetings.txt', ' Hello World! ');