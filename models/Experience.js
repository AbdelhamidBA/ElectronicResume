const mongoose = require("mongoose")

const ExperienceSchema = new mongoose.Schema({
    experience_title: {
        type: String,
        required: true
    },
    experience_role: {
        type: String,
        required: true
    },
    start_period: {
        type: String,
        required: true
    },
    end_period: {
        type: String,
        required: String
    }

}, { collection: 'Experiences' });

module.exports = Experience = mongoose.model('Experiences', ExperienceSchema);