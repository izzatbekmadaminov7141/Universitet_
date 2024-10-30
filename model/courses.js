const db = require("../config/db");
module.exports = class Courses {
  constructor(course_name, instructor, schedule, max_students) {
    this.course_name = course_name;
    this.instructor = instructor;
    this.schecdule = schedule;
    this.max_students = max_students;
  }
  static async findAll() {
    const { rows } = await db.query("SELECT * FROM courses");
    return rows;
  }
};
