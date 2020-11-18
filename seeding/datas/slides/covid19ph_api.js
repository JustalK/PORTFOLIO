'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b00006aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a REST API made when I was in the Philippines. Everybody try to help at his level, so I decide to also take action and create a robust REST API anyone can use for creating their software or app.",
		second_text: "The goal was to create an REST API easy to use, flexible, well documented, tested and most of all capable of auto updating itself with the latest data from DOH.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caad00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b00006aaaaa0002"),
		title: "Work",
		first_text: "I did this project for helping, the best that I could. I use Restify and Node.js. For the test, I use Ava and chai. On the server side, it's a t2-micro from AWS who control the app with a cluster under PM2.",
		second_text: "The hard part of this project was the way DOH have their data update. They have a shorten link who redirect to a google driver with a link inside with an other shorten link that redirect to another google drive full of csv files. It's quite a lot of process for such a small task.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caad00003")
	}
]
