const fs = require('fs');
const path = require('path');


function getNotes() {
    const notesData = fs.readFileSync(
        path.join(__dirname, '../db/db.json')
    );

}

  
function createNewNote(body, notes) {

    const note = body;
    notes.push(note);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes)
    );

    return note;
}


module.exports = {
  getNotes,
    createNewNote
};
