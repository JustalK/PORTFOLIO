var mongoose = require('mongoose');
var mongo_uri_builder = require('mongo-uri-builder');
module.exports = {
    parse_db_uri: function (db_name, db_uri, db_username, db_password) {
        db_uri += db_name;
        var split_uri = db_uri.split('/');
        var db_data = {};
        db_data.db = split_uri[3];
        db_data.host = split_uri[2].split(':')[0];
        db_data.port = split_uri[2].split(':')[1];
        db_data.username = db_username;
        db_data.password = db_password;
        return db_data;
    },
    create_mongo_uri: function (db_data) {
        return mongo_uri_builder({
            username: db_data.username,
            password: db_data.password,
            host: db_data.host,
            port: db_data.port,
            database: db_data.db
        });
    },
    mongoose_connect: function (db_name, db_uri, db_username, db_password) {
        var db_data = module.exports.parse_db_uri(db_name, db_uri, db_username, db_password);
        var db_uri_data = module.exports.create_mongo_uri(db_data);
        mongoose.connect(db_uri_data, { useNewUrlParser: true, useUnifiedTopology: true });
    }
};
