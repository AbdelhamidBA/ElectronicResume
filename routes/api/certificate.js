const express = require("express")
const router = express.Router();
const Certificate = require("../../models/Certificate")


// @route POST Certificate api
router.post("/certificate", async(req, res) => {
    const { certificate_title } = req.body
    try {
        let certificate = new Certificate({
            certificate_title
        })

        await certificate.save()
        res.json({
            error: false,
            message: "Certificate Registered",
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

// @route GET Certificate api

router.get("/certificate", async(req, res) => {
    try {
        let educations = await Certificate.find()
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