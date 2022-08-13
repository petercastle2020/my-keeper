const Note = require("../models/noteModel");
const mongoose = require("mongoose");

// get all notes

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single note

const getSingleNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document" });
  }

  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ error: "No such document" });
  }

  res.status(200).json(note);
};

// create new note

const createNote = async (req, res) => {
  const { title, content } = req.body;

  // add doc to db...
  try {
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a note

const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document" });
  }

  const note = await Note.findOneAndDelete({ _id: id });

  if (!note) {
    return res.status(400).json({ error: "No such document" });
  }

  res.status(200).json(note);
};

// update a note
const updateNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document" });
  }

  const note = await Note.findByIdAndUpdate({ _id: id }, { ...req.body });
};

module.exports = {
  getNotes,
  createNote,
  getSingleNote,
  deleteNote,
  updateNote,
};
