'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16102aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for ZipWorld. It's a internationnal company specialist of low cost flight around the world. They wanted a second website in the same style at the first one..",
		second_text: "The goal was to make a website promoting zipworld and giving information about how it is to travel around the world, giving advises, things to avoid, things to be careful about....",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e05aaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16102aaaaa0002"),
		title: "Work",
		first_text: "I work alone on this project. It was my second time working with Code Igniter, just after ZipWorld. I use PhpMyAdmin for the database and jQuery for the interactivity.",
		second_text: "Since I worked on this project just after ZipWorld, it was a breeze. The style was similar and I understood how Code Igniter work, so I could deliver the project fast.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e05aaa00003")
	}
]
