var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    var file = __dirname + '/../upload/1.pdf';
    const uploadFolder = __dirname + '/../upload/';
    //res.download(file);
    fs.readdir(uploadFolder, (err, files)=>{
        files.forEach(file=>{
            console.log(file);
        });
    })
});

module.exports = router;
