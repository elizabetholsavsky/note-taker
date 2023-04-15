const express = require('express');
const router = express.Router();
const fs = require('fs');
const notes = require('../db/db.json');
var uniqueID = require('uniqid'); 

// GET /api/notes (return db.json)
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST /api/notes (return new note, add to db.json, return to client, give note unique ID when saved)
router.post('/notes', (req, res) => {

});

// DELETE /api/notes/:id 
router.delete('/notes/:id', (req, res) => {

});

module.exports = router;
