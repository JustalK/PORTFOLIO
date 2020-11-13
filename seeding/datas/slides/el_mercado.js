'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16103aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for Sybarite. It's a thai company specialist in the delivery of product and meal imported from accross the world. They wanted an online store.",
		second_text: "The goal was to make a website where a visitor can browse their products or meals and order online, see the latest news and events El Mercado is participating on.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16103aaaaa0002"),
		title: "Work",
		first_text: "I was working with a small team of developer and graphic designer for this project. We did this website with WordPress. We used PHP, jQuery and PhpMyAdmin.",
		second_text: "It was my first step in the professional world, so obviously I struggle a bit. The methods are different from the school, so I have to adapt and improve my skills fast. And I did !",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
