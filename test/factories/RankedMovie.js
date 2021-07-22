const { RankedMovie } = require('../../models/User');
const movieFactory = require('../factories/Movie');

const emptyRank = new RankedMovie({
    movie: movieFactory.validMovie
});

const emptyMovie = new RankedMovie({
    rank: 1
});

module.exports = { emptyRank, emptyMovie };