'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b00006aaaaa0001"),
		title: "Presentation",
		first_text: "This project is an application made for COVID19.",
		second_text: "The goal was to create something similar with a newsletter but with calculations, differents templates depending of who to send to, dynamic creations of list depending of who fill a report. Everything has to be connected to their existing systems like Typeform, Mailgun, Mailchimp and Rumarocket Software.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caad00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b00006aaaaa0002"),
		title: "Work",
		first_text: "I was alone on this project for creating the entire backend and setting up the server. I made everything with Nodejs and restify. I also needed to connect to many API like Typeform API for getting the forms, Googlesheet API for getting some of their datas, Mailchimp API for getting the templates.",
		second_text: "I faced two major problems on this project. First, the API of Mailchimp, I discovered a bug and report it to them. But I still smash my face to the wall trying to understand. Secondly, the calculations was quite enormous, so I often run out of memory on my server. I needed to optimize heavily my application.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caad00003")
	}
]
