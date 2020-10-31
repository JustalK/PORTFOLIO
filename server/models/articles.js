'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			require: true
		},
		slug: {
			type: String
		},
		short_description: {
			type: String,
			trim: true,
			require: true
		},
		long_description: {
			type: String,
			trim: true
		},
		tags: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Tags'
		} ],
		images: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Images'
		} ],
		order: {
			type: Number
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
