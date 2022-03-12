const db = require("../models/index");
const config = require('../config/auth.config');
const Movie = db.sequelize.models.Movie;
const WatchedMovie = db.sequelize.models.WatchedMovie
var jwt = require("jsonwebtoken");

exports.addMovie = (req, res) =>{
    Movie.create({
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        length: req.body.length,
        prodCountry: req.body.prodCountry,
        path: req.body.path
    }).then(movie => {
        res.send({message: "Movie was added successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message});
    });
}

exports.watchedMovie = (req,res,next) => {
    WatchedMovie.create({
        UserId: req.userId,
        MovieId: req.body.MovieId
    }).then(watchedmovie => {
        next();
    }).catch(err => {
        res.send({message: err.message});
    });
}

exports.moviePath = (req,res) => {
    Movie.findOne({
        where: {
            id: req.body.MovieId
        }
    }).then(movie => {
        res.status(200).send({path : movie.path})
    }).catch(err => {
        res.status(500).send({message: err.message})
    });
}