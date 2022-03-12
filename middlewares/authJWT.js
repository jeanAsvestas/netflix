var mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const config = require('../config/auth.config.js');
const db = require("../models/index");
const User = db.sequelize.models.User;

verifyToken = (req, res, next) => {
    //let token = req.headers['x-access-token'];
    let token = req.headers.authorization.split(' ')[1]; // works for postman

    console.log(token)
    if (!token) {
        return res.status(401).send({
            message: 'No token provided'
        });
    }

    jwt.verify(token,config.secret, (err,decoded) =>{
        if (err){
            return res.status(401).send ({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

isAdmin = (req,res,next) => {    
    User.findByPk(req.userId).then(user => {
        if (user.isAdmin === true){
            next();
            return;
        }
        res.status(403).send({
            message: "Require Admin Role"
        });
        return;
    });
}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
  };

module.exports = authJwt;
