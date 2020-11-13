'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e91aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website made for Saona-villas. A 20 years old company who rent beautiful villas for particulars. They have client from different nationnalities and villas accross Europe.",
		second_text: "When I received this project, the website was already made. The goal was to add functionnalities and to also add or maintain new webhook from around 30 differents website of reservations.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8c2a900002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e91aaaaa0002"),
		title: "Work",
		first_text: "I was alone on this project. Everything was made with PHP and Jquery with PhpMyAdmin as Database. Everything was made from scratch, so at the beginning I read what my predecessor did.",
		second_text: "The hard part of the project was to maintain and add the webhook. The reservation of the website had to always be in synchronisation with the other website like Airbnb, TripAdvisor, Booking... It's quite a hard work.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8c2a900003")
	}
]
