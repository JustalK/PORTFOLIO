'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = {
	get_one: (find) => {
		return model
			.findOne(find)
			.populate('image')
			.populate('image_alternative');
	}
};
