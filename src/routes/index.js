var express = require('express');
var user = require('../entity/user')
var router = express.Router();

var sessionData;

router.get('/register', function(req, res, next) {
});


router.get('/', function(req, res, next) {
  res.send({status:200, message:"hi"})
});

module.exports = router;