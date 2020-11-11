'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa5001"),
		title: "Presentation",
		first_text: "This project is an application made for a french association. This is a local alternative to the big and famous app TheFork. They promote local restaurant at the lowest price and at the same time, they help the community by giving the fees from the reservations to a french association helping the homeless persons.",
		second_text: "The goal was to create a web-app for making or cancelling reservations, for discovering restaurants around your positions, for finding the fatest way to this restaurant. Also, the project includes different way of paiement, splitting the paiement between different bucket.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa5002"),
		title: "Work",
		first_text: "I was the leading developer for this project. I was developing the frontend and the backend with a small team of 2 developers. For the frontend, I use React Native for the mobile app, PHP for the web browser version and for the backend I use PHP too and PhpMyAdmin.",
		second_text: "I did not encountered any big problems on this project. The project was well defined and the client was cool. I lead the team with AGILE method, putting the ressources where we should focus and we deliver the new features of the project every week with return from the client.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00003")
	}
]
