// models/Movie.js

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    release_date: {
        type: Date
    }
}, { timestamps: true });

module.exports = Movie = mongoose.model('Movie', MovieSchema);