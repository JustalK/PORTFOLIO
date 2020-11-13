'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e96aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for the Sails Concept. It's a french shop who design and make custom sails for boats.",
		second_text: "The website was already done when I received the project, they wanted to add a few pages with one where you can design your own sails for making requests.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e96aaaaa0002"),
		title: "Work",
		first_text: "I work alone on this project. The website was made in PHP from scratch. So first I had to read the code entirely. Once done, I use what was there and continue in PHP and jQuery.",
		second_text: "The hard part of this project was the page where you design your own sails. I created the sail in a canvas and split every part of it by segment that you can fill with a color. It was tricky.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
