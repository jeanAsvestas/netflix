var express = require('express');
var router = express.Router();
const db = require("../models/index");
const controller = require('../controllers/plan.controller')
const authJWT = require('../middlewares/authJWT')

router.post('/add', 
    authJWT.verifyToken,
    controller.addPlan    
);

router.post('/buy',
    authJWT.verifyToken,
    controller.buyPlan
);

router.post('/check',
   controller.readPlan,
   (req,res) => {
       res.json(req.body.ordered)
   }
);


module.exports = router;