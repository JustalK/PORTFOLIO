'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = {
	get_all: (find, skip, limit) => {
		return model
			.find(find)
			.skip(skip)
			.limit(limit)
			.populate('images');
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
			.populate({path: 'slides', populate: {path: 'image'}})
			.populate('background_image')
			.populate('images');
	},
	get_count: (find) => {
		return model
			.countDocuments(find);
	}
};
