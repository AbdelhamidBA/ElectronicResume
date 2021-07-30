const express = require("express")
const router = express.Router();
const Education = require("../../models/Education")


// @route POST Education api
router.post("/education", async(req, res) => {
    const { degree, university, start_year, end_year } = req.body
    try {
        let education = new Education({
            degree,
            university,
            start_year,
            end_year
        })

        await education.save()
        res.json({
            error: false,
            message: "Education Registered",
            status: 200
        });
    } catch (err) {
        console.log(err)
        res.json({
            error: true,
            message: "Server Error",
            status: 500
        });
    }
});

// @route GET Education api

router.get("/education", async(req, res) => {
    try {
        let educations = await Education.find()
        res.json({
            error: false,
            data: educations,
            status: 200
        })
    } catch (err) {
        res.json({
            error: true,
            data: "Server Error",
            status: 500
        })
    }
})

module.exports = router