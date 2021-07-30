const mongoose = require("mongoose")

const EducationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    start_year: {
        type: String,
        required: true
    },
    end_year: {
        type: String,
        required: String
    }

}, { collection: 'Educations' });

module.exports = Education = mongoose.model('Educations', EducationSchema);