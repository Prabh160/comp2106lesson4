var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4', message: 'Node Home Page'});
});

/* GET Register */
router.get('/Register', function(req,res,next){
    res.render('Register');
});

/* GET Login */
router.get('/Login', function(req,res,next){
    res.render('Login');
});

module.exports = router;
