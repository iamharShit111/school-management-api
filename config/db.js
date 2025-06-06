const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err.message);
    process.exit(1); // stop app if DB doesn't connect
  }
  console.log("MySQL Connected...");
});

module.exports = connection;


module.exports = db;
