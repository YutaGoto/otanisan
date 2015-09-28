var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Top' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET about page. */
router.get('/dora', function(req, res, next) {
  res.render('dora', { title: 'Dora' });
});

module.exports = router;
