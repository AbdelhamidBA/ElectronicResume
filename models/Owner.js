const mongoose = require("mongoose")

const OwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        default: "25"
    },
    residency: [{
        country: {
            type: String,
            required: true,
            default: "Tunisia"
        },
        residence: {
            type: String,
            required: true,
            default: "Monastir"
        },
        city: {
            type: String,
            required: true,
            default: "Teboulba"
        }
    }],
    languages: [{
        language: {
            type: String,
            required: true,
            default: "Arabic"
        },
        level: {
            type: Number,
            required: true,
            default: 100
        }
    }],
    experties: [{
        title: {
            type: String,
            required: true,
            default: "JS"
        },
        level: {
            type: Number,
            required: true,
            default: 75
        }
    }],
    knowledges: {
        type: [String],
        required: true,
        default: ["Web Dev"]
    },
    cv_link: {
        type: String,
        required: true,
        default: "https://store8.gofile.io/download/ddb5562e-83fc-451b-9687-dd0dc48e59f9/Resume.pdf"
    }
}, { collection: 'Owner' });

module.exports = Project = mongoose.model('Owner', OwnerSchema);