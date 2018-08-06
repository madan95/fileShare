var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
  // var file = __dirname + '/../upload/1.pdf';
    var fileList = [];
    const uploadFolder = __dirname + '/../upload/';
   // res.download(file);
    fs.readdir(uploadFolder, (err, files)=>{
       // files.forEach(file=>{
         //   fileList.push(file);
          //  console.log(file);
        //});
        res.json(files);
    })
   // console.log('here at download.js');
  //  res.send('okie dokie');
   // res.send(fileList);
});

module.exports = router;
