const express = require("express");
const router = express.Router();
const Tutor = require("../models/tutor");

// Getting the list of all the tutors
router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting a tutor by id
router.get("/:id", getTutor, (req, res) => {
  res.send(res.tutor);
});

// Creating a new tutor
router.post("/", async (req, res) => {
  console.log(req);
  const tutor = new Tutor(req.body);

  try {
    const newTutor = await tutor.save();
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating a tutor
router.patch("/:id", getTutor, async (req, res) => {
  if (req.body.firstName != null) {
    res.tutor.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.tutor.lastName = req.body.lastName;
  }
  try {
    const updatedTutor = await res.tutor.save();
    res.json(updatedTutor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting a tutor
router.delete("/:id", getTutor, async (req, res) => {
  try {
    await res.tutor.remove();
    res.json({ message: "Deleted Tutor" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getTutor(req, res, next) {
  let tutor;
  try {
    tutor = await Tutor.findById(req.params.id);
    if (tutor == null) {
      return res.status(404).json({ message: "Cannot find tutor" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.tutor = tutor;
  next();
}

module.exports = router;
