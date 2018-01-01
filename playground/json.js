// let obj = {
//     name: "Akash"
// };
//
// let stringObj = JSON.stringify(obj);
// console.log(typeof (stringObj));
// console.log(stringObj);

// let personString = '{"name": "Akash", "age": 20}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: "Note title",
    body: "Some details"
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.body);
