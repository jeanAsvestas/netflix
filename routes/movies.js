var express = require('express');
var router = express.Router();
const db = require("../models/index");
const Movie = db.sequelize.models.Movie;
const WatchedMovie = db.sequelize.models.WatchedMovie;
const controller = require('../controllers/movie.controller')
const authJWT = require('../middlewares/authJWT')

router.get('/add',function (req,res){
    res.render('movie',{
        id:req.query.id  });
});

router.post('/add', 
    //authJWT.verifyToken,
    //authJWT.isAdmin, 
    controller.addMovie
);

router.get('/watch', async function(req,res){
    let movies = await Movie.findAll();      
    res.render('watchmovie',{
        list : movies
    })
});
router.post('/watch', 
    authJWT.verifyToken,
    controller.watchedMovie,
    controller.moviePath
);
module.exports = router;
