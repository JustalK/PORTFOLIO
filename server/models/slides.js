'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
	{
		title: {
			type: String,
			lowercase: true,
			trim: true,
			require: true
		},
		first_text: {
			type: String,
			trim: true,
			require: true
		},
		second_text: {
			type: String,
			trim: true,
			require: true
		},
		image: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'images'
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
