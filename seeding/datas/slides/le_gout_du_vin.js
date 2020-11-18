'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e94aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website made for Le Gout Du Vin 56. It's a local wine merchant from Britany. They are participing in many different events and are gathering a lot of customer accross France.",
		second_text: "The goal was to make a website for presenting their different shop and their locations. They also wanted a way to give informations about wine and general news about wine..",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa10002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e94aaaaa0002"),
		title: "Work",
		first_text: "For this project, I was in collaboration with a graphic designer. I did the whole website from scratch in PHP and jQeury. I use PhpMyAdmin as the database. I also give a particular interest to the SEO.",
		second_text: "The most annoying part of this website was the map for giving the location of shop. It was my first time working with the cluster of google map and the client wanted really something specific.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa10003")
	}
]
