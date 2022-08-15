const express = require("express");
const {
  getNotes,
  createNote,
  getSingleNote,
  deleteNote,
  updateNote,
} = require("../controllers/noteController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all notes
router.get("/", getNotes);

// GET  a single note
router.get("/:id", getSingleNote);

// POST a new note
router.post("/", createNote);

// DELETE a note
router.delete("/:id", deleteNote);

// UPDATE a note
router.patch("/:id", updateNote);

module.exports = router;
