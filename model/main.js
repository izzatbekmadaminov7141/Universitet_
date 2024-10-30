const db = require("../config/db");
module.exports = class Student {
  constructor(username, age, mojor, password) {
    this.username = username;
    this.age = age;
    this.mojor = mojor;
    this.password = password;
  }
  async save() {
    await db.query(
      "INSERT INTO u_courses(username, age, mojor, password) VALUES($1, $2, $3, $4)",
      [this.username, this.age, this.mojor, this.password]
    );
  }

  static async findAll() {
    const { rows } = await db.query("SELECT * FROM u_courses");
    return rows;
  }

  static async getUser(username) {
    const { rows } = await db.query(
      "SELECT * FROM u_courses WHERE username = $1",
      [username]
    );
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
};
