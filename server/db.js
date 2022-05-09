const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "tchouistheman",
  host: "localhost",
  database: "pernstack",
  port: 9999,
});

module.exports = pool;