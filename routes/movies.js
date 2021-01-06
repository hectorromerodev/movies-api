const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);
  
  // Instantiate the service
  const moviesService = new MoviesService();

  // Get all
  router.get('/', async function (req, res, next) {
    const { tags } = req.query; 
    try{
      const movies = await moviesService.getMovies({tags});
      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      });
    }catch(err) {
      next(err);
    }
  });
  // Get one
  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movieRetrived = await moviesService.getMovie(movieId);
      res.status(200).json({
        data: movieRetrived,
        message: 'Movie retrived',
      });
    } catch (err) {
      next(err);
    }
  });
  // Add
  router.post('/', async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie(movie);
      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created',
      });
    } catch (err) {
      next(err);
    }
  });
  // Put
  router.put('/:moviesId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.updateMovie({movieId, movie});
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated',
      });
    } catch (err) {
      next(err);
    }
  });
  // Partial update

  router.patch('/:moviesId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try{
      const partialUpdatedMovieId = await moviesService.partialUpdate({ movieId, movie });
      res.status(200).json({
        data: partialUpdatedMovieId,
        message: 'Movie updated partialy'
      });
    }catch(err) {
      next(err);
    }
  });

  // Delete
  router.delete('/:moviesId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie(movieId);
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted',
      });
    } catch (err) {
      next(err);
    }
  }); 

}

module.exports = moviesApi; 