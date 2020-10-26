const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = {
	get_all: (find, skip, limit) => {
		return model
			.find(find)
			.skip(skip)
			.limit(limit);
	},
	get_count: (find) => {
		return model
			.countDocuments(find);
	}
};
