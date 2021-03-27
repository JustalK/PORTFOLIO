'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e910daaa4001'),
		title: 'Presentation',
		first_text: 'This project is an application made for multiple companies like Chooks To Go, Baliwag and Andoks. All of those concurrent companies are food sellers of chicken products. All of them are developing really fast and opening many shops across the Philippines. We proposed to them to utilize AI for predicting where is the best location for their future shops.',
		second_text: 'The goal was to create a web application which makez them appear in google map, give users a way to put a proposition of a future shop on the map and rank the shop location based on data from different sources like the people frequenting, the parking around, the population in this area, the incoming mall projects, etc.',
		image: mongoose.Types.ObjectId('5f9d88d3faed1e8caab00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e910daaa4002'),
		title: 'Work',
		first_text: 'I was the lead developer for this project. I had both hand on the frontend and backend with 2 other developers on my team. On the backend, I used my favorite tool Node.js, Express and MongoDB. And for the frontend, React was the choice. For the server side, t3 instance from aws, nginx and PM2.',
		second_text: 'The biggest problem encountered for this project was the big data that crashed the project many times. The algorithms and the millioms of data to parse was a real struggle. The code needed to be optimized and the calculations needed to be split into clusters.',
		image: mongoose.Types.ObjectId('5f9d88d3faed1e8caab00003')
	}
]
