const expect = require('chai').expect;
const userFactory = require('../factories/User');
const rankedMovieFactory = require('../factories/RankedMovie');

describe('User', function() {
    it('should be invalid if email is empty', function(done) {
        const u = userFactory.emptyEmail;
        
        u.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });

    it('should be invalid if password is empty', function(done) {
        const u = userFactory.emptyPassword;

        u.validate(function(err) {
            expect(err.errors.password).to.exist;
            done();
        });
    });

    describe('RankedMovie', function() {
        it('should be invalid if the rank is empty', function(done) {
            const rm = rankedMovieFactory.emptyRank;
            
            rm.validate(function(err) {
                expect(err.errors.rank).to.exist;
                done();
            });
        });

        it('should be invalid if the movie is empty', function(done) {
            const rm = rankedMovieFactory.emptyMovie;

            rm.validate(function(err) {
                expect(err.errors.movie).to.exist;
                done();
            });
        });
    });
});