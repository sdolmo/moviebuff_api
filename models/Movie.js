var db = require('../dbconnection');

var Movie = {

  getAllMovies: function(callback) {
      return db.query('SELECT * FROM movies', callback);
  },

  addMovie: function(Movie, callback) {
    console.log(Movie);
    return db.query('INSERT INTO movies SET ?', Movie, callback);
  },

  getMovieById: function(id, callback) {
    return db.query('SELECT * FROM movies WHERE id=?', [id], callback);
  },

  updateMovie: function(id, Movie, callback) {
    console.log(Movie);
    return db.query('UPDATE movies SET title=?, director=?, description=?, genre=?, img=? WHERE id=?', [Movie.title, Movie.director, Movie.description, Movie.genre, Movie.img, id], callback);
  },

  deleteMovie: function(id, callback) {
    console.log(id);
    return db.query('DELETE FROM movies WHERE id=?', [id], callback);
  }

};

module.exports = Movie;
