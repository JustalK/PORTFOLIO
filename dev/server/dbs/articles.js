var path = require('path');
var filename = path.basename(__filename, '.js');
var model = require('../models/' + filename);
module.exports = {
    get_all: function (find, skip, limit) {
        return model
            .find(find)
            .skip(skip)
            .limit(limit);
    },
    get_count: function (find) {
        return model
            .countDocuments(find);
    }
};
