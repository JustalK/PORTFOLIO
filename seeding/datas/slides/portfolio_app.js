'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e91aaacc0001'),
		title: 'Presentation',
		first_text: 'This project is a personnal project for presenting my work made over the years. Of course, I cannot present everything since I signed some confidentially papers on some projects. But it presents a big amount of my work.',
		second_text: 'On this project, my goal was to have an app on the store that I could share to anyone. Who does not have a phone this day ?',
		image: mongoose.Types.ObjectId('5f9d88d3eeed1e00aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e91aaacc0002'),
		title: 'Work',
		first_text: 'I made everything by myself with React Native for the frontend. For the backend, I connected the app to the backend of my website. So everytime, I add something on the website, it update the app without me pushing new code on Google Store.',
		second_text: 'The project is finished and work perfectly but I will certainly make another version where I will push everything for making the app at the level of the website.',
		image: mongoose.Types.ObjectId('5f9d88d3eeed1e00aaa00003')
	}
];
