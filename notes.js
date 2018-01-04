console.log('Starting notes.js');

//module object is default object in every node file
const fs = require('fs');

let fetchNote = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

let saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let logNote = (note) =>{
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

let addNote = (title, body) => {
    let notes = fetchNote();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }

};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    let notes = fetchNote();
    let fetchNotes = notes.filter((note) => note.title === title);
    return fetchNotes[0];
};

let deleteNote = (title) => {
    let notes = fetchNote();
    let remainingNotes = notes.filter((note) =>
    note.title !== title);
    saveNote(remainingNotes);
    return remainingNotes.length !== notes.length;
};

module.exports = {
  addNote,
    getAll,
    getNote,
    deleteNote,
    logNote
};
