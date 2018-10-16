var express = require('express');
var router = express.Router();
var save = require('../util/uploader');

router.post('/', function (req, res, next) {
    save.saveToFolder(req);
    res.send('ok');
});

module.exports = router;
