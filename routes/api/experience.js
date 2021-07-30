const express = require("express")
const router = express.Router();
const Experience = require("../../models/Experience")


// @route POST Experience api
router.post("/experience", async(req, res) => {
    const { experience_title, experience_role, start_period, end_period } = req.body
    try {
        let experience = new Experience({
            experience_title,
            experience_role,
            start_period,
            end_period
        })

        await experience.save()
        res.json({
            error: false,
            message: "Experience Registered",
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

// @route GET Experience api

router.get("/experience", async(req, res) => {
    try {
        let experiences = await Experience.find()
        res.json({
            error: false,
            data: experiences,
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