console.log('Starting notes.js');

//module object is default object in every node file

let addNote = (title, body) => {
    console.log('Adding Note', title, body);
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
