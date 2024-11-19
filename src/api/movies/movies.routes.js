const MoviesRoutes = require('express').Router();

const { getPopularMovies, getNowPlayingMovies, getMovieCredits } = require('../movies/movies.controller');


MoviesRoutes.get('/popular', getPopularMovies);
MoviesRoutes.get('/now-playing', getNowPlayingMovies);
MoviesRoutes.get('/credits/:movieId', getMovieCredits);

module.exports = MoviesRoutes