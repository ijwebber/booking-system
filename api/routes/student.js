const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Getting the list of all the students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting a student by id
router.get("/:id", getStudent, (req, res) => {
  res.send(res.student);
});

// Creating a new student
router.post("/", async (req, res) => {
  console.log(req);
  const student = new Student(req.body);

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating a student
router.patch("/:id", getStudent, async (req, res) => {
  if (req.body.firstName != null) {
    res.student.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.student.lastName = req.body.lastName;
  }
  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting a student
router.delete("/:id", getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: "Deleted Student" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: "Cannot find student" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.student = student;
  next();
}

module.exports = router;
