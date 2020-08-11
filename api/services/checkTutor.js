module.exports = async function checkTutor(req, res, next) {
  if (req.user.isStudent) {
    res.status(401).send("User is not a tutor");
  } else {
    next();
  }
};
