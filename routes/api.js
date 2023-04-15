// API ROUTES
const express = require('express');
const router = express.Router();
const path = require('path');

// create unique & random note IDs using random npm
import random from 'random';
const uniqueID = random.int(1000, 5000);

// GET /api/notes (return db.json)

// POST /api/notes (return new note, add to db.json, return to client)***
    // ***give note unique ID when saved

// DELETE /api/noyes/:id (bonus)

module.exports = router;
