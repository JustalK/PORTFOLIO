'use strict';

const mongoose = require('mongoose');

module.exports = [
    {
        firstname: 'kevin',
        lastname: 'justal',
        email: 'justal.kevin@gmail.com',
        numero: '+33764021722',
        location: 'Paris, France',
        current_work: 'Lead Full Stack Developer',
        android_url:
            'https://play.google.com/store/apps/details?id=com.justalk.portfolio',
        github_url: 'https://github.com/JustalK',
        linkedin_url: 'https://www.linkedin.com/in/justalk/',
        portfolio_url: 'https://www.justalkevin.com',
        image: mongoose.Types.ObjectId('5f9d88d3faed1e0700700001'),
        image_alternative: mongoose.Types.ObjectId('5f9d88d3faed1e0700700002')
    }
];
