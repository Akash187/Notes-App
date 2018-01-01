console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

/** @namespace yargs.argv */
let argv = yargs.argv;
let command = argv._[0];
console.log('Command:', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
    let note = notes.addNote(argv.title, argv.body);
    console.log(note);
}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    notes.getNote(argv.title);
}else if (command === 'delete'){
    notes.deleteNote(argv.title);
} else {
    console.log('Command not recognised')
}