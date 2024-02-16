'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
    {
        diploma: {
            type: String,
            trim: true,
            require: true
        },
        graduation_date: {
            type: Date,
            require: true
        },
        location: {
            type: String,
            trim: true,
            require: true
        },
        website: {
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
