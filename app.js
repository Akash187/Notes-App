const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of the note',
        demand: true,
        alias: 't'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body:{
            describe: 'Description of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title: titleOptions
    })
    .command('delete', 'Delete a note',{
        title: titleOptions
    })
    .help()
    .argv;

let command = argv._[0];
console.log('Command:', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Added');
        notes.logNote(note);
    }else {
      console.log('Note title taken');
    }
}else if (command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read'){
    let readNote = notes.getNote(argv.title);
    if(readNote) {
        console.log('Note found');
        notes.logNote(readNote);
    }else {
        console.log('Note not found');
    }
}else if (command === 'delete'){
    let noteRemoved = notes.deleteNote(argv.title);
    let message = noteRemoved ? 'Note was removed': 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognised')
}
