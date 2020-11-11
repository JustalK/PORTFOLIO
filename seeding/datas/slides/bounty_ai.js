'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa4001"),
		title: "Presentation",
		first_text: "This project is an application made for multiple company like Chooks To Go, Baliwag and Andoks. All of those concurrent companies are food seller of chicken product. All of them are developing really fast and opening many shops accross the Philippines. We proposed to them to utilize AI for predicting where is the best location for their futur shops.",
		second_text: "The goal was to create a web application who show the google map, give the user a way to put a proposition of a futur shop on the map and returning him a rank for this shop location based on data from different sources like the frequenting, the parking around, the population in this area, the mall projects incomming...",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa4002"),
		title: "Work",
		first_text: "I was the leading developer for this project. I have both hand on the frontend and backend with 2 other developer on my team. On the backend, I use my favorite tool Node.js, Express and MongoDB. And for the frontend, React was the choice. For the server side, t3 instance from aws, nginx and PM2.",
		second_text: "The biggest problem encountered for this project was the big data that crashed the project many times. The algorithms and the millioms of data to parse was a real struggle. The code needed to be really optimized and the calculations needed to be split into clusters.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00003")
	}
]
