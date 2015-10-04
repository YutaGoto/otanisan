var express = require('express');
var router = express.Router();

var controller = {};
// controller.index  = require('../controller/index.js');
controller.app = require('../controller/app.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', controller.app.index);
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', controller.app.about);
});

/* GET about page. */
router.get('/dora', function(req, res, next) {
  res.render('dora', controller.app.dora);
});

module.exports = router;
