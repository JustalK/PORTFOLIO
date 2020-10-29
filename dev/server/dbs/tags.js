var path = require('path');
var filename = path.basename(__filename, '.js');
var model = require('../models/' + filename);
module.exports = {
    get_all: function (find) {
        return model
            .find(find);
    }
};
