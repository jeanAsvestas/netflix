var express = require('express');
var router = express.Router();
const db = require("../models/index");
const Movie = db.sequelize.models.Movie;
const movieController = require('../controllers/movie.controller')
const planController = require('../controllers/plan.controller')
const authJWT = require('../middlewares/authJWT')



router.post('/add',
    authJWT.verifyToken,
    //authJWT.isAdmin, 
    movieController.addMovie
);

router.post('/watch',
    authJWT.verifyToken,
    planController.readPlan,
    movieController.watchedMovie,
    movieController.moviePath
);


router.post('/update',
    // authJWT.verifyToken,
    // authJWT.isAdmin,

);

router.post('/delete',


);


//not for api use
router.get('/add', function (req, res) {
    res.render('movie', {
        id: req.query.id
    });
});

//not for api use
router.get('/watch', async function (req, res) {
    let movies = await Movie.findAll();
    res.render('watchmovie', {
        list: movies
    })
});

module.exports = router;