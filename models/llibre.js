const mongoose = require('mongoose');

const llibreSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Llibre', llibreSchema);