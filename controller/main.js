const Courses = require("../model/courses");
const Student = require("../model/main");
const Application = require("../model/application");
// Router /
// method Get
// Desc   Main page
const mainGetRouter = async (req, res) => {
  try {
    // const users = await Student.findAll();
    res.render("index", { title: "Login page" });
  } catch (err) {
    console.log(err);
  }
};

// Router /
// method Post
// Desc   Main page

const mainPostRouter = async (req, res) => {
  try {
    const { username, password } = req.body;
    const student = await Student.getUser(username);
    if (student) {
      if (student.password === password) {
        const courses = await Courses.findAll();
        res.render("courses", {
          title: "Courses page",
          student: student,
          courses,
        });
      } else {
        res.redirect("/");
      }
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
  }
};

const postapplicationRouter = async (req, res) => {
  try {
    const { course_id, user_id } = req.body;
    const application = new Application(course_id, user_id);
    await application.save();
    res.render("mycourses", {
      title: "tabrilaymiz",
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { mainGetRouter, mainPostRouter, postapplicationRouter };
