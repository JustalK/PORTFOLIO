'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa8001"),
		title: "Presentation",
		first_text: "This project is a website made for Pro Marine. A company who sell boat made in France. They have a big list of different model of boat. They wanted a website for presenting their boat and giving some news about their activities.",
		second_text: "The goal was to create a small website for presenting everything to their visitors with a custom administration. The website has a listing of boat, a page for the different models and a blog section. We also pay an interest to the SEO since the client wanted the website to show on google.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8c0a900002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa8002"),
		title: "Work",
		first_text: "I was in collaboration with a designer for this project. For the code, I made everything from scratch in PHP and PhpMyAdmin. I also have to communicate with the client and giving him the documentation, timelines and answers on the phone to his queries and modifications.",
		second_text: "The project was simple, so I did not face any problem on this one. The client made some changes on the way but nothing excessive that needed big change. It was a breeze between two big projects.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8c0a900003")
	}
]
