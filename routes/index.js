var http = require('http');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/test', function (req, res, next) {
    console.log("GET SEND");
    res.send("get");
});

router.post('/test', function (req, res) {
    console.log("POST SEND");
    res.send("post");
});

module.exports = router;
