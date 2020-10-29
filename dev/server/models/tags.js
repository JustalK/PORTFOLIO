var mongoose = require('mongoose');
var path = require('path');
var filename = path.basename(__filename, '.js');
// Define the article schema
var schema = new mongoose.Schema({
    name: {
        type: String
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
