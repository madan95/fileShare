var fs = require('fs');
var formidable = require('formidable');

module.exports = {
    saveToFolder: function (req) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            console.log('go2');
            console.log(files.file.path);
            console.log('no2');
            var oldpath = files.file.path;
            var newpath = __dirname +'/../upload/' +files.file.name;
            fs.rename(oldpath, newpath, function (err) {
                if(err) throw err;
            });
        })
    }
}