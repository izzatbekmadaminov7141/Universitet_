const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "universitet_courses",
  password: "0507",
  port: 5432,
});

module.exports = pool;
