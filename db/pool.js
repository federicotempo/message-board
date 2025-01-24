const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "postgres",
  database: "message_board",
  password: "fedet9898",
  port: 5432 
});
