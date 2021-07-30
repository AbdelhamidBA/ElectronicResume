const express = require("express")
const router = express.Router();
const Owner = require("../../models/Owner")


// @route POST OwnerInfo api
router.post("/owner", async(req, res) => {
    const { name, speciality, job, age } = req.body
    try {
        let owner = new Owner({
            name,
            speciality,
            job,
            age
        })

        await owner.save()
        res.json({
            error: false,
            message: "owner Registered",
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



router.post("/language", async(req, res) => {
    const { language, level } = req.body
    try {
        let owner = await Owner.findOne()
        owner.languages.push({ "language": language, "level": level })
        await owner.save()
        res.json({
            error: false,
            message: "Language added",
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

router.post("/residency", async(req, res) => {
    const { country, residence, city, age } = req.body
    try {
        let owner = await Owner.findOne()
        owner.residency.push({ "country": country, "residence": residence, "city": city })
        await owner.save()
        res.json({
            error: false,
            message: "Residence added",
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

router.post("/expertie", async(req, res) => {
    const { title, level } = req.body
    try {
        let owner = await Owner.findOne()
        owner.experties.push({ "title": title, "level": level })
        await owner.save()
        res.json({
            error: false,
            message: "Experties added",
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

router.post("/knowledge", async(req, res) => {
    const { knowledge } = req.body
    try {
        let owner = await Owner.findOne()
        owner.knowlegdes.push(knowledge)
        await owner.save()
        res.json({
            error: false,
            message: "Knowledge added",
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


// @route GET owner api

router.get("/owner", async(req, res) => {
    try {
        let owner = await Owner.find()
        res.json({
            error: false,
            data: owner,
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