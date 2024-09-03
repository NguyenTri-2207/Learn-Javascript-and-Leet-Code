const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

const app = express();

const connection = mysql.createConnection(URl);

connection.connect((err) => {
  if (err) throw err;
  console.log("Đã kết nối với ID: " + connection.threadId);
});

app.get("/", function (req, res) {
  const query = "SELECT * FROM user";
  connection.query(query, (err, results) => {
    console.log(results);
    if (err) throw err;
    return res.send(results);
  });
});

app.listen(8000, () => {
  console.log("Listening on 8000");
});
