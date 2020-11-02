'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = {
	get_all: (find) => {
		return model
			.find(find);
	}
};
