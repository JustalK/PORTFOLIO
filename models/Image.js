const mongoose = require('mongoose');

//Define the image schema
var image = new mongoose.Schema(
    {
        name: {
            type: String
        },
        path: {
            type: String
        }
    },
    {
        collection: 'images'
    }
);

module.exports = mongoose.model('Image', image);