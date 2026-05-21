const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// View engine
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "college",
  port: 3307
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// Login route
app.post("/login", (req, res) => {
  const { regid, password } = req.body;

  const sql = "SELECT * FROM students WHERE regid = ?";

  db.query(sql, [regid], (err, result) => {
    if (err) {
      return res.send("Server error");
    }

    if (result.length === 0) {
      return res.send("User not found");
    }

    if (result[0].password === password) {
      res.send("Login successful 🎉");
    } else {
      res.send("Invalid password ❌");
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
