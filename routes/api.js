const express = require('express');
const router = express.Router();

// include file system to read, write, append
const fs = require('fs');

// JSON
const notes = require('../db/db.json');

// GET /api/notes (return db.json)
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST /api/notes (return new note, add to db.json, return to client, give note unique ID when saved)

// create unique & random note IDs using 'random' npm
// const random = require('random');
// const uniqueID = random.int(1000, 5000);

// DELETE /api/notes/:id (bonus)

module.exports = router;
