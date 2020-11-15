'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			require: true
		},
		path: {
			type: String,
			trim: true,
			require: true
		},
		path_low: {
			type: String,
			trim: true
		}
	},
	{
		timestamps: true,
		collection: filename,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

module.exports = mongoose.model(filename, schema);
