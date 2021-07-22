// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
        { type: mongoose.Schema.Types.ObjectId, ref: 'RanedMovie' }
    ]
}, { timestamps: true });

const RankedMovieSchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }
}, { timestamps: true });

module.exports = User = mongoose.model('User', UserSchema);
module.exports = RankedMovie = mongoose.model('RankedMovie', RankedMovieSchema);