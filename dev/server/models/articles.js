var mongoose = require('mongoose');
var path = require('path');
var filename = path.basename(__filename, '.js');
// Define the article schema
var schema = new mongoose.Schema({
    title: {
        type: String
    },
    slug: {
        type: String
    },
    short_description: {
        type: String,
        require: true
    },
    long_description: {
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
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: filename,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
module.exports = mongoose.model(filename, schema);
