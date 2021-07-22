// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    movies_owned: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ],
    watchlist: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ],
    favorites_ranked: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ],
    favorites_ranked: [
        { rank: Number, movie: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ]
}, { timestamps: true });

module.exports = User = mongoose.model('user', UserSchema);