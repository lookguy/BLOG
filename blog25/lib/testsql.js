// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '192.168.1.141',
  port:"5432",
  user: 'root',
  password: "123456",
  database: 'test'
});

// simple query
connection.query(
  'show databases;',
  function (err, results, fields) {
    console.log("err",err)
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);