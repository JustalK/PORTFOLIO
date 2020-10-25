const mongoose = require('mongoose');

//Define the tag schema
var tag = new mongoose.Schema(
    {
        name: {
            type: String
        }
    },
    {
        collection: 'tags'
    }
);

tag.virtual('v_tagUse').get(function() {
    return false;
});
tag.set('toObject', { virtuals: true });
tag.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Tag', tag);