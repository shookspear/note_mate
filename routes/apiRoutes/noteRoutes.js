const router = require('express').Router();
const { getNotes, createNewNote } = require('../../lib/notes');
const notesData = require('../../db/db.json');

router.get('/notes', (req, res) => {
  const results = getNotes();
  res.json(results);
});



router.post('/notes', (req, res) => {
  req.body.id = notesData.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  }
});

module.exports = router;