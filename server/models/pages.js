'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			lowercase: true,
			trim: true,
			require: true
		},
		title: {
			type: String,
			trim: true,
			require: true
		},
		description: {
			type: String,
			trim: true
		},
		meta_description: {
			type: String,
			trim: true,
			require: true
		},
		meta_title: {
			type: String,
			trim: true,
			require: true
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
