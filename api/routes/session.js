const express = require("express");
const router = express.Router();
const Session = require("../models/session");

// Getting the list of all the sessions
router.get("/", async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting a session by id
router.get("/:id", getSession, (req, res) => {
  res.send(res.session);
});

// Creating a new session
router.post("/", async (req, res) => {
  console.log(req);
  const session = new Session(req.body);

  try {
    const newSession = await session.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating a session
router.patch("/:id", getSession, async (req, res) => {
  if (req.body.title != null) {
    res.session.title = req.body.title;
  }
  if (req.body.notes != null) {
    res.session.notes = req.body.notes;
  }
  if (req.body.duration != null) {
    res.session.duration = req.body.duration;
  }
  if (req.body.startTime != null) {
    res.session.startTime = req.body.startTime;
  }

  try {
    if (req.body.tutor != null) {
      res.session.tutor = req.body.tutor;
    }
    if (req.body.student != null) {
      res.session.student = req.body.student;
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  try {
    const updatedSession = await res.session.save();
    res.json(updatedSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting a session
router.delete("/:id", getSession, async (req, res) => {
  try {
    await res.session.remove();
    res.json({ message: "Deleted Session" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getSession(req, res, next) {
  let session;
  try {
    session = await Session.findById(req.params.id);
    if (session == null) {
      return res.status(404).json({ message: "Cannot find session" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.session = session;
  next();
}

module.exports = router;
