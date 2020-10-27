const mongoose = require('mongoose');
const path = require('path');
const filename = path.basename(__filename, '.js');

// Define the article schema
const schema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        slug: {
            type: String
        },
        shortDescription: {
            type: String,
            require: true
        },
        longDescription: {
            type: String
        },
        tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tags'
        }],
        images: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Images'
        }],
        order: {
            type: Number
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        collection: filename,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

module.exports = mongoose.model(filename, schema);
