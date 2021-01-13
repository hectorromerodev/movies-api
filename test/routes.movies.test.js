const assert = require('assert').strict;
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/schemas/testServer.js');

describe('routes - movies', function () {
	const route = proxyquire('../routes/movies', {
		'../services/movies': MoviesServiceMock,
	});

	const request = testServer(route);
	describe('GET /movies', function () {
		it('Should respond with status 200', function (done) {
			request.get('/api/movies').expect(200, done);
		});

		it('Should respond with the list of movies', function (done) {
			request.get('/api/movies').end((err, res) => {
				assert.deepStrictEqual(res.body, {
					data: moviesMock,
					message: 'movies listed',
				});
				done();
			});
		});
	});
});
