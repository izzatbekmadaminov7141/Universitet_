const Student = require("../model/main");
// Router /register
// method Get
// Desc   Register page
const registerGetRouter = (req, res) => {
  res.render("register", { title: "Register page" });
};

// Router /register
// method Post
// Desc   Register student
const registerPostRouter = async (req, res) => {
  try {
    const { username, age, mojor, password } = req.body;
    const student = new Student(username, age, mojor, password);
    await student.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerGetRouter, registerPostRouter };
