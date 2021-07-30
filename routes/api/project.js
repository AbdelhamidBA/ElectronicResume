const express = require("express")
const router = express.Router();
const Project = require("../../models/Project")



// @route POST Experience api
router.post("/project", async(req, res) => {
    const { project_img, project_desc } = req.body
    try {
        /*
        if (req.files !== null) {
            
            const file = req.files.file
            file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
                if (err) {
                    console.error(error)
                    return res.status(500).send(err)
                }
            });
            let project_img = file.name
            
            
        } else {
            res.json({
                error: true,
                message: "No Image to upload",
                status: 400
            });
        }
        */

        let project = new Project({
            project_desc,
            project_img
        })

        await project.save()
        res.json({
            error: false,
            message: "Project Registered",
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

router.get("/project", async(req, res) => {
    try {
        let projects = await Project.find()
        res.json({
            error: false,
            data: projects,
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