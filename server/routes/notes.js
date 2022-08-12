const express = require("express");
const {
  getNotes,
  createNote,
  getSingleNote,
} = require("../controllers/noteController");

const router = express.Router();

// GET all notes
router.get("/", getNotes);

// GET  a single note
router.get("/:id", getSingleNote);

// POST a new note
router.post("/", createNote);

// DELETE a note

// UPDATE a note

module.exports = router;
