'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');
require('./experiences');
require('./educations');
require('./personals');

const schema = new mongoose.Schema(
    {
        introduction: {
            type: String,
            trim: true,
            require: true
        },
        experiences: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'experiences'
            }
        ],
        educations: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'educations'
            }
        ],
        personals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'personals'
            }
        ]
    },
    {
        timestamps: true,
        collection: filename,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

module.exports = mongoose.model(filename, schema);
