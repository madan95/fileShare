var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', (req, res) =>
    res.send({ username: os.userInfo().username })
);

module.exports = router;
