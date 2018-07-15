var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

    var mongoUtil = require('../util/mongoUtil');
    var myUser = {name: "madan", password: "1232"};

    mongoUtil.connectToServer(function (err) {
        var db = mongoUtil.getDb();
        var dbo = db.db('mydb');
        dbo.createCollection("users", function (err, res) {
            if(err) throw err;
            console.log("Collection of user created!");
        });
        dbo.collection("users").insertOne(myUser, function (err, res) {
            if(err) throw err;
            console.log('2 user inserted ' + res.insertedCount);
            // console.log(res);
        })
    });

});

module.exports = router;
