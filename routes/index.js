var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(" index page called..");
  res.render('index', { title: 'Express, hello lule 2016' });
});

module.exports = router;
