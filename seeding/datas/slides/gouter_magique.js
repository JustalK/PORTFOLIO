'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e93aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website made for Gouter Magique, a branch from Whaou. It's a french company specialized in the cake. It's not the first time, they come to my company with an idea of website.",
		second_text: "The goal was to make a website for simply presenting their new range of product and also take a particular attention to the SEO for appearing at the top of google search on some terms.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e93aaaaa0002"),
		title: "Work",
		first_text: "For this project, I was in collaboration with a graphic designer and a SEO specialist. I did everything from scratch in PHP and jQuery. I used PhpMyAdmin for the database.",
		second_text: "This website was the first one to introduce me to the concept of SEO. I learn a lot about it on the way and keep a close contact with the specialist for improving my website in the following project.",
		image: mongoose.Types.ObjectId("5f76018c9b16e91aaaaa0002")
	}
]
