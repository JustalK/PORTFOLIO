'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16169aeeaa0001'),
		title: 'Presentation',
		first_text: 'This website is a platform that allows users to download SVGs with colors selected by them. It was a project created for Manypixels, a company I previously worked for.',
		second_text: 'I developed this website independently as a freelancer. The website aims to attract attention and guide users to the official Manypixels website.',
		image: mongoose.Types.ObjectId('5f9d88d3ffed1e07eea00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16169aeeaa0002'),
		title: 'Work',
		first_text: 'I developed this website using Next.js 14, leveraging the latest enhancements provided by the framework. For the database, I integrated the site with Firebase and Airtable. For deployment, I used Netlify.',
		second_text: 'I was the sole developer on this project, working on it over the weekend. It was my first experience with Airtable, but I quickly understood how it works. The project was relatively straightforward, with the exception of implementing the color pickers for the SVGs.',
		image: mongoose.Types.ObjectId('5f9d88d3ffed1e07eea00003')
	}
]
