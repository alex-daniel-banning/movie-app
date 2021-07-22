const expect = require('chai').expect;
const movieFactory = require('../factories/Movie');

describe('Movie', function() {
    it('should be invalid if the title is empty', function(done) {
        const m = movieFactory.emptyTitle;

        m.validate(function(err) {
            expect(err.errors.title).to.exist;
            done();
        });
    });

    it('should be invalid if the director is empty', function(done) {
        const m = movieFactory.emptyDirector;

        m.validate(function(err) {
            expect(err.errors.director).to.exist;
            done();
        });
    });
})