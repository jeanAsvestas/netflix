const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
var express = require('express');
var router = express.Router();


router.use(function (req,res,next){
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.get('/signin', function(req,res){
    res.render('login')
});

router.get("/signup", function (req,res){    
    res.render('register')
});

router.post('/signup', 
    verifySignUp.checkDuplicateUserEmail, 
    controller.signup
);
    

router.post("/signin", controller.signin, function (req,res){
    console.log(req)
    res.redirect('/')
});



module.exports = router;