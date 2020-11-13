'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e99aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for ZipWorld. It's a internationnal company specialist of low cost flight around the world. They wanted a website dynamic and attractive for selling their flight.",
		second_text: "The goal was to make a website for presenting their tour and flight, for giving informations about insurrance, the best hotels, their partners. A visitor should also be able to buy on the website.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e99aaaaa0002"),
		title: "Work",
		first_text: "I work alone on this project. It was my first time working with Code Igniter. It was a request from the client. I use PhpMyAdmin for the database and jQuery for the interactivity.",
		second_text: "The biggest problem I faced was when Code Igniter have a big update on the core of their CMS. The change from version 2 to version 3 was really hard. I struggled with some of the changes.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
