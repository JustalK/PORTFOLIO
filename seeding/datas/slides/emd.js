'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e98aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for EMD PRO. It's a internationnal company selling items and stuffs for self-defense and for the army. They wanted an online shop.",
		second_text: "The goal was to make a website for presenting their products, for any visitor to have the possibility to buy and make an order.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e98aaaaa0002"),
		title: "Work",
		first_text: "I work with a graphic designer on this project. I made the website with WordPress and Jquery. For the database, the choice was PhpMyAdmin.",
		second_text: "The project was simple. I did not face any problem. It was interesting though because it was a domain you do not work often.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
