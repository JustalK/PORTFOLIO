'use strict';

const mongoose = require('mongoose');

module.exports = [
    {
        "title": "Supersogo.com",
        "slug": "supersogo",
        "short_description": "My first project",
        "long_description": "Just a test on my first project lalala al la lala la la lal a la",
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
]
