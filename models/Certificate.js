const mongoose = require("mongoose")

const CertifcateSchema = new mongoose.Schema({
    certificate_title: {
        type: String,
        required: true
    },
    certificate_date: {
        type: Date,
        default: Date.now
    }


}, { collection: 'Certificates' });

module.exports = Certificate = mongoose.model('Certificates', CertifcateSchema);