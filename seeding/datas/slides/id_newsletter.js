'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa7001"),
		title: "Presentation",
		first_text: "This project is a website made for my company ID-Interactive. Our company was managing a lot of newsletter for different clients and we wanted to automatize that. So we decided to create something similar to Mailchimp and customize it like we want.",
		second_text: "The goal was to create a website where the client can connect to it, design their own newlestter, can test the website with a limit on the functionnalities, can create and program campaigns, can create list of people and receive logs about their campaigns.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa7002"),
		title: "Work",
		first_text: "I was completely alone for this project. So I was in charge of the frontend and backend. I made the fronted with Angular and the backend was made with PHP. The project was fun since we were the owner of it, so anything was made for us only.",
		second_text: "The biggest problem I run into was the blacklist of our sending server. That was the first time I learn about how bounce and how server IP are filtered between blacklist and whitelist. I needed to optimize the sending of email in a way to send the maximum of email without being blacklist. It was hard !",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00003")
	}
]
