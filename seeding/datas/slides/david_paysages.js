'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e97aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for David Paysage. It's a french company created by a landscaper artist. They wanted a website for presenting their different creations.",
		second_text: "The goal was to make a website for presenting their work. The design of the website was made by them. So I only have to make the code.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caae00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e97aaaaa0002"),
		title: "Work",
		first_text: "I work alone on this project. I made the whole website from scratch in PHP and jQuery. For the database, I use PhpMyAdmin.",
		second_text: "The project was simple. It was my first project in this company, so I have to adapt to new tools and new process of doing.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caae00003")
	}
]
