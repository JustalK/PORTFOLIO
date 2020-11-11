'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa1001"),
		title: "Presentation",
		first_text: "This project is an application made for the atlantic-grains company. A product supplier company with many warehouses that deliver all accross the Philippines. With an experience of more than 10 years, they have really optimized processes but most of them was made in paper. A team will then digital those papers and archive everything. They wanted an application for managing easily every parts of their processes more efficiently.",
		second_text: "The goal was to create an application for managing the deliveries, the products, the sales, the employees and giving report to the differents level of manager and CEO. There are a lot of roles like the drivers, the repairmans, the logistic admins, the logistic warehouses, the guards, the ceo... They all have their own functionnalities and interact with the other roles.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa1002"),
		title: "Work",
		first_text: "My main work for this project was to create the whole REST API, setting the server and the different connection between the different databases. And also helping the frontend as much as possible when I am in advance. This project use Javascript mainly but needed good knowledge on C#. For the frontend, we build everything with React.js and for the backend, I use Restify and MongoDB with Nodejs.",
		second_text: "The biggest problem encountered was the countless changes of the requierements. Even if I was following the AGILE method, I needed to refactor parts of the app every weeks. The second big problem was the fact that some necessary documents for building the app was not there. I had to create a second API for communicating with their current app written in C#.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00003")
	}
]
