'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16100aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for SuperSogo. It's a thai company specialist in the selling of art and sculpture. This is the main website of the company.",
		second_text: "The goal on this website was to implement new functionnalities, optimize the website, improve the loading speed, improving the code..",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e02aaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16100aaaaa0002"),
		title: "Work",
		first_text: "I work with a small team on this project. I was in charge of the implementation of the new functionnalities and improvements. The website was made with WordPress and Vanila JS. For the dabase, it was PhpMyAdmin.",
		second_text: "The improvement of the loading speed was my biggest challenge on this project. WordPress is quite heavy and optimizing the loading and order of the ressources is not easy. But I manage to reduce considerably the loading time.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e02aaa00003")
	}
]
