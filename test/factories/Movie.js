const Movie = require('../../models/Movie');

const validMovie = new Movie({
    title: 'Good Will Hunting',
    director: 'Gus Van Sant'
});

const emptyTitle = new Movie({
    director: 'Christopher Nolan'
});

const emptyDirector = new Movie({
    title: 'The Big Short'
});

module.exports = { validMovie, emptyTitle, emptyDirector };