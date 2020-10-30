'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

// Define the article schema
const schema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			require: true
		},
		lastname: {
			type: String,
			require: true
		},
		email: {
			type: String,
			require: true
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		},
		collection: filename,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

module.exports = mongoose.model(filename, schema);
