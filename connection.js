const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourRootPassword",
  database: "employees"
});

connection.connect();