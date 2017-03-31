var express = require('express');
var router = express.Router();
var fetch = require('request');
var TwitterController = require('../controllers/TwitterController');

/* GET home page. */
router.get('/', TwitterController.twitter);

module.exports = router;
