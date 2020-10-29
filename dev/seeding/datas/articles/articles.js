var mongoose = require('mongoose');
module.exports = [
    {
        "title": "Title 1",
        "slug": "title-1",
        "short_description": "Bla bla bla bla 1",
        "long_description": "Bla bla bla blaBla bla bla blaBla bla bla blaBla bla bla blaBla bla bla blaBla bla bla blaBla bla bla bla 1",
        "tags": [mongoose.Types.ObjectId("5f95461688489acdd8ee5873")],
        "images": [],
        "order": 0
    },
    {
        "slug": "title-2",
        "title": "Title 2",
        "short_description": "Bla bla bla bla 2",
        "long_description": "Bla bla bla blaBla bla bla blaBla bla bla blaBla bla bla blaBla bla bla blaBla bla bla blaBla bla bla bla 2",
        "tags": [mongoose.Types.ObjectId("5f95461688489acdd8ee5875")],
        "images": [],
        "order": 1
    }
];
