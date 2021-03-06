const fs = require('fs');
const path = require('path');

// function to create a new note
const createNewNote = (body, notesArr) => {
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );

    return note;
};

module.exports = { createNewNote };