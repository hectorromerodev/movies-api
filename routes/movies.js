const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);
  // Get all
  router.get('/', async function (req, res, next) {
    try{
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      });
    }catch(err) {
      next(err);
    }
  });
  // Get one
  router.get('/:moviesId', async function (req, res, next) {
    try {
      const movieRetrived = await Promise.resolve(moviesMock[0]);
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
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id);
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
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated',
      })
    } catch (err) {
      next(err);
    }
  });
  // Delete
  router.delete('/:moviesId', async function (req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted',
      })
    } catch (err) {
      next(err);
    }
  });

}

module.exports = moviesApi; 