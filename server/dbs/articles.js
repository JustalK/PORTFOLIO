'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = {
	get_all: (find, fields, skip, limit, populated) => {
		return model
			.find(find, fields)
			.skip(skip)
			.limit(limit)
			.populate(populated);
	},
	get_one: (find) => {
		return model
			.findOne(find)
			.populate('background_image')
			.populate('images');
	},
	get_one_populated: (find) => {
		return model
			.findOne(find)
			.populate('slides', 'id title')
			.populate('background_image')
			.populate('images');
	},
	get_count: (find) => {
		return model
			.countDocuments(find);
	}
};
