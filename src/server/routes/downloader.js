var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/:file(*)', function (req, res, next) {
    /* var file = __dirname + '/../upload/1.pdf';
  //  var fileList = [];
    const uploadFolder = __dirname + '/../upload/';
    // res.download(file);
   // fs.readdir(uploadFolder, (err, files)=>{
        // files.forEach(file=>{
        //   fileList.push(file);
        //  console.log(file);
        //});
     //   res.json(files);
   // })
    // console.log('here at download.js');
    //  res.send('okie dokie');
    // res.send(fileList);
    console.log('downloaindg' + file);
    res.download(file);

    */
    console.log(req.params.file);
    var file = req.params.file;
    //var fileLocation = path.join('../upload', file);
    var fileLocation = __dirname + '/../upload/'+file;
    console.log(fileLocation);
    res.download(fileLocation);

});

module.exports = router;
