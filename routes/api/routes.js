const express = require("express")
const router = express.Router();


// @route GET api
router.get("/", (req, res) => {
    res.send("Index Page")
});

module.exports = router