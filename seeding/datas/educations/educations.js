'use strict';

const mongoose = require('mongoose');

module.exports = [
    {
        id: mongoose.Types.ObjectId('5f76018c9b16126aaaaa0001'),
        diploma: 'Graduate IT Engineering School Polytech Nice Sophia',
        graduation_date: new Date('2016'), // month index start at 0
        location: 'Nice Sophia, France',
        website:
            'https://univ-cotedazur.fr/formation/offre-de-formation/ingenieur-informatique'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16126aaaaa0002'),
        diploma: 'Exchange student - Asian Institute of Technology',
        graduation_date: new Date('2015'), // month index start at 0
        location: 'Bangkok, Thailand',
        website: 'https://ait.ac.th/program/computer-science/'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16126aaaaa0003'),
        diploma: 'Preparatory Classes : 2 years undergraduate intensive course',
        graduation_date: new Date('2012'), // month index start at 0
        location: 'Saint Brieuc, France',
        website: 'http://lycee-chaptal-saintbrieuc.fr/'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16126aaaaa0004'),
        diploma: 'Baccalaureate Engineering Science High School Brequigny',
        graduation_date: new Date('2009'), // month index start at 0
        location: 'Brequigny, France',
        website: 'https://www.lycee-brequigny.fr/'
    }
];
