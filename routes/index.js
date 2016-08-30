var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.clear();
  res.render('index', { title: 'Express, hello' });
});

module.exports = router;
