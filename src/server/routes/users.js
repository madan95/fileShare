var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function (req, res, next) {
    console.log(req);
 /*   var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log('go');
        console.log(files.file.path);
        console.log('no');
        var oldpath = files.file.path;
        var newpath = __dirname +'/../upload/' +files.file.name;
            fs.rename(oldpath, newpath, function (err) {
                if(err) throw err;
                res.end();
            });
    })
*/
    var save = require('../util/uploader');
    save.saveToFolder(req);

    res.send('ok');

//    var tmp_path = req.files.thumb.path;
   // res.send('post recieved ' + tmp_path);

});

module.exports = router;
