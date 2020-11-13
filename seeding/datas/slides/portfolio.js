'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa9001"),
		title: "Presentation",
		first_text: "This project is a personnal project for presenting my work made over the years. Of course, I cannot present everything since I signed some confidentially papers on some projects. But it presents a big amount of my work.",
		second_text: "On this project, my goal was to have a cool way to present eveything, how I work and to make something cool that I could present to anyone.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa80002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa9002"),
		title: "Work",
		first_text: "I made everything by myself with mainly Node.js for the backend, Vue.js for the frontend, Ubuntu 20 Server for the server. I put everything on a github, so my code, tests and processes can be ananlyzed and read. I made the documentation as explicit as possible.",
		second_text: "It's basically show off what I can do with times and what tools I know and how I use them.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00003")
	}
]
