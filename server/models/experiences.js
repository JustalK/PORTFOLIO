'use strict';

const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

const schema = new mongoose.Schema(
    {
        role: [
            {
                type: String,
                trim: true,
                require: true
            }
        ],
        missions: [
            {
                type: String
            }
        ],
        start_date: {
            type: Date,
            require: true
        },
        end_date: {
            type: Date
        },
        is_current: {
            type: Boolean,
            default: false
        },
        is_remote: {
            type: Boolean,
            default: false
        },
        is_freelance: {
            type: Boolean,
            default: false
        },
        start_date_freelance: {
            type: Date
        },
        company: {
            type: String,
            trim: true,
            require: true
        },
        location: {
            type: String,
            trim: true
        },
        website: {
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
