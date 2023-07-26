const express = require("express");
const path = require("path");
const router = express.Router();

const index = path.resolve(__dirname, '../../client/build/index.html');

router.get('*', (req, res) => {
    res.sendFile(index);
});

module.exports = router;