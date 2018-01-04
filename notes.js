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
        return `Note Successfully Added Title : ${title} Body : ${body}`;
    }else{
        return "Note Already Exist";
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log("Getting note",title);
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
    deleteNote
};
