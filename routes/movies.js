var express = require('express');
var router = express.Router();
var mysql = require("mysql2");
const db = require("../models/index");
const User = db.sequelize.models.User;
const Movie = db.sequelize.models.Movie;
const WatchedMovie = db.sequelize.models.WatchedMovie;

router.get('/add',function (req,res){
    res.render('movie',{
        id:req.query.id  });
});

router.post('/add', async function(req,res){   
    try {
        let plan = await Movie.create({
            title: req.body.title,
            year: req.body.year,
            path: req.body.path
        })
        if (plan) {
            res.send("you have added a new movie")
        }
    } catch {
        if (err) throw err;
    }
});

router.get('/watch', async function(req,res){
    let movies = await Movie.findAll();      
    res.render('watchmovie',{
        list : movies,
        id : req.query.id
    })
});
router.post('/watch', async function(req, res){
    console.log(req.query);
    let ordered = await WatchedMovie.create({
        UserId: req.query.id,
        MovieId: req.query.movie
    })
    res.render('watching', {
        link : req.query.path,
        id : req.query.id
    })
})
module.exports = router;
