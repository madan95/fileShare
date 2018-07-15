var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var _db;

module.exports = {
    connectToServer: function (callback) {
        MongoClient.connect(url, function (err, db) {
            if(err) throw err;
            console.log('Database Created');
            _db = db;
            return callback( err );
        });
    },

    getDb: function () {
        return _db;
    },
    
    closeDb: function () {
        _db.close();
    }
};



