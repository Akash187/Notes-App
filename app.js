console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];
console.log('Command:', command);
//console.log(process.argv);

if(command === 'add'){
    console.log('Adding new note');
}else if (command === 'list'){
    console.log('Listing all notes');
}else if (command === 'read'){
    console.log('Fetching Note');
}else if (command === 'delete'){
    console.log('Deleting Note');
} else {
    console.log('Command not recognised')
}