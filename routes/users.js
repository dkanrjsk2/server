var express = require("express");
var router = express.Router();
const { getConn } = require("../db");

// show all user
router.get("/", async (req, res) => {
  try {
    const conn = await getConn();
    const query = "SELECT * FROM User";
    let [rows, fields] = await conn.query(query, []);
    conn.release();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const conn = await getConn();
    const checkQuery = "SELECT * FROM User WHERE email = ?";
    const [rows] = await conn.query(checkQuery, [email]);
    if (rows.length > 0) {
      res
        .status(400)
        .send("Email already exists. Please use a different email.");
    } else {
      const query = "INSERT INTO User (email, password) VALUES (?, ?)";
      await conn.query(query, [email, password]);
      res.status(200).send("User added successfully");
    }
    conn.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const conn = await getConn();
    const query = "SELECT * FROM User WHERE email = ? AND password = ?";
    const [rows] = await conn.query(query, [email, password]);
    conn.release();
    if (rows.length > 0) {
      res.status(200).send("Signin successful");
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
