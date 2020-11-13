'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16104aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for Thailand Health. It's a branch of SuperSogo where any visitor can search for the best hospitals in Bangkok.",
		second_text: "The goal was to add functionnalities to the already existing website like the search by label or improving the default search.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16104aaaaa0002"),
		title: "Work",
		first_text: "I was working with an other developer on this website who was teaching me the process of SuperSogo. The website was a WordPress using jQuery for the interactivity and PhpMyAdmin for the database.",
		second_text: "With the help of my coworker, I finished with ease the tasks asked. I already knew WordPress since I used it before for personnal project.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
