var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:file(*)', function(req, res, next){
    //var path =require('path');
   // var file = req.params.file;
   // var path = path.resolve(".")+'../upload/'+file;
 //   res.download(path);
});

module.exports = router;
