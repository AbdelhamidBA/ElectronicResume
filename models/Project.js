const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    project_desc: {
        type: String,
        required: true
    },
    project_img: {
        type: String
    }


}, { collection: 'Projects' });

module.exports = Project = mongoose.model('Projects', ProjectSchema);