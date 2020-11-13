'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa6001"),
		title: "Presentation",
		first_text: "This project is a website made for Evasia. It's a big company selling motor-home in Europe. With a boost in the sales in the previous years, they wanted to diversify and come to my company with an idea. They wanted an application for making people test camping-car and maybe sell even more.",
		second_text: "After some long exchange, the final goal was to make an app for renting camping-car from particular. It involves paiement, reservations, browsing between a list of available camping-car with many different filter and a blog for the manager of the website.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa40002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa6002"),
		title: "Work",
		first_text: "I was completely alone for this project. I discussed directly with the client, created the documentations and the features requierements, made my own gantts. The timeline was short. I use PHP for the backend and frontend and created everything from scratch. I did not use any CMS.",
		second_text: "The hardest part of this project was the change made multiple times by the client and the really short deadline. Hopefully for me, I defined the project quite effectively at the beginning so I manage to deliver on time even with the change on the way.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa40003")
	}
]
