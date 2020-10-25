const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

const dbs = {
	get_all: (find) => {
		return model
			.find(find);
	}
};

module.exports = dbs;
