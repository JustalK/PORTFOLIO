'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            lowercase: true,
            trim: true,
            require: true
        },
        lastname: {
            type: String,
            lowercase: true,
            trim: true,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        numero: {
            type: String
        },
        location: {
            type: String
        },
        current_work: {
            type: String
        },
        portfolio_url: {
            type: String
        },
        android_url: {
            type: String
        },
        github_url: {
            type: String
        },
        linkedin_url: {
            type: String
        },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'images'
        },
        image_alternative: {
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

schema.virtual('fullname').get(function () {
    return this.lastname + ' ' + this.firstname;
});

module.exports = mongoose.model(filename, schema);
