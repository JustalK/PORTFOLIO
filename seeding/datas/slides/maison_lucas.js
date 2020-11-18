'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e92aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website made for Maison Lucas. A french fishmonger with more than 50 years of experience, who has been gaining in popularity in the last year. They wanted a simple website for having a presence on internet.",
		second_text: "The goal for this project was simple. They wanted a website where they can show their products, where people can buy them, presenting themself and giving some fresh news about the company.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa70002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e92aaaaa0002"),
		title: "Work",
		first_text: "I was alone on this project. The client asked me to use WordPress because he already know a bit about it. So I did everything in PHP and a bit of jQuery and for the database PhpMyAdmin.",
		second_text: "I did not faced any problems at all on this project. The client knew what he want exactly, so no change was made during the development. He was not in the urgence, so the deadline was not a problem. It was a breeze !",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa70003")
	}
]
