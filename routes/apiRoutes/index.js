const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');

// GET all notes
router.get('/notes', (req, res) => {
    console.log('API GET all notes reached');
    console.log(notes);

    res.json(notes);
});

// GET single note
/* router.get('/notes/:id', (req, res) => {
    console.log('API GET single note reached')
    console.log(notes[req.params.id]);

    res.json(notes[req.params.id]);
});
*/

// POST a new note
router.post('/notes', (req, res) => {
    console.log('POST a new note');
    req.body.id = notes.length.toString();
    
    const note = createNewNote(req.body, notes);
    console.log(note);
    res.json(note);
});

// DELETE a single note
router.delete('/notes/:id', (req, res) => {
    console.log('DELETE note reached');

    const removedNote = notes.splice(req.params.id, 1);
    console.log(removedNote);
    res.json(removedNote);
});

module.exports = router;