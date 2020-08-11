module.exports = async function checkStudent(req, res, next) {
  if (!req.user.isStudent) {
    res.status(401).send("User is not a student");
  } else {
    next();
  }
};
