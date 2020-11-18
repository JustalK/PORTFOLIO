'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e95aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for Finistere Assurance. It's a french insurrance company. They wanted a brand new website for their main branch.",
		second_text: "The goal was to make a website for presenting the offers and packages of this company and to give extra informations with an admin panel.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caafa0002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e95aaaaa0002"),
		title: "Work",
		first_text: "I work alone on this project. I made the whole website in PHP and jQuery. For the database, I use PhpMyAdmin.",
		second_text: "The project was simple. I was kind of bored by the project, so I made it fun by trying new CSS animations and trying search engine optimization.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caafa0003")
	}
]
