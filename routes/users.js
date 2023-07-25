var express = require("express");
var router = express.Router();
const { getConn } = require("../db");

// /users/
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

// /users/signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const conn = await getConn();
    const checkQuery = "SELECT * FROM User WHERE email = ?";
    const [rows] = await conn.query(checkQuery, [email]);
    if (rows.length > 0) {
      res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    } else {
      const query = "INSERT INTO User (email, password) VALUES (?, ?)";
      await conn.query(query, [email, password]);
      console.log("User added success");
      res.status(200).json({ message: "User added successfully" });
    }
    conn.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// /users/signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const conn = await getConn();
    const query = "SELECT * FROM User WHERE email = ? AND password = ?";
    const [rows] = await conn.query(query, [email, password]);
    conn.release();
    if (rows.length > 0) {
      res.status(200).json({ message: "Signin successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
