console.log('Starting notes.js');

//module object is default object in every node file
const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(e){

    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log("Getting note",title);
};

let deleteNote = (title) => {
    console.log("Removing note",title);
};

module.exports = {
  addNote,
    getAll,
    getNote,
    deleteNote
};
