'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');
require('./images');
require('./slides');

const schema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			require: true
		},
		slug: {
			type: String,
			require: true
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
			ref: 'tags'
		} ],
		images: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'images'
		} ],
		background_image: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'images'
		},
		slides: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'slides'
		}],
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
