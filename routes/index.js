var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.id){
    res.render('index', { title: 'Netflix',
    id:req.query.id  });
  } else {
    res.render('indexGuest',{title: 'Netflix'})
  }
});

module.exports = router;
