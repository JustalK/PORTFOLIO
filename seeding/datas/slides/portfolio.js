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
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa80003")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa9003"),
		title: "Technical Challenges",
		first_text: "I improved the website a little more as I add the new projects I'm working on. And sometimes, what you did before or what you want is making your life really hard. When I work on my homepage I wanted an animation welcoming new visitors to enter my world. I wanted a door.",
		second_text: "This wish will make the website a lot more complicated because now I have a duplication on the left and on the right of the home page. Because of that, a simple hovering become tricky. If you pass over the image on the home page, I needed to also event the other side of the website of this hovering. So I play with the event system of Vue.js",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa80004")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa9004"),
		title: "Resume page",
		first_text: "I created new pages like the privacy page, linked my portfolio to my app portfolio and finally I created a page for showing my resume. And this is a perfect example sometimes you cannot do what you want, so you have to compromise.",
		second_text: "For showing my resume, I use a library name pdf.js. I tried to link the pdf inside my github. I failed, so I end up using a version downloaded.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa80005")
	}
]
