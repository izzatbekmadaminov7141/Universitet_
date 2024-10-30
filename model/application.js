const db = require("../config/db");

module.exports = class Application {
  constructor(course_id, user_id) {
    this.course_id = course_id;
    this.user_id = user_id;
  }
  async save() {
    await db.query(
      "INSERT INTO application(course_id, user_id) VALUES($1, $2)",
      [this.course_id, this.user_id]
    );
  }
  static async findAll() {
    const { rows } = await db.query("SELECT * FROM application");
    return rows;
  }
};
