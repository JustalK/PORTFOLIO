'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e910daaa1001'),
		title: 'Presentation',
		first_text: 'This project is an application made for the Atlantic-Grains company. A product supplier company with many warehouses that delivers all accross the Philippines. With an experience of more than 10 years, they have optimized processes but most of them were written in paper. A team will then digitalize those papers and archive everything. They wanted an application for easily managing every part of their processes more efficiently.',
		second_text: 'The goal was to create an application for managing the deliveries, the products, the sales, and the employees and giving report to the different levels of managers and CEO. There are lots of roles including the drivers, the repairmen, the logistic admins, the logistic warehouses, the guards, the CEO, etc. They all have their own functionalities and interact with the other roles.',
		image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e910daaa1002'),
		title: 'Work',
		first_text: 'My main work for this project was to create the whole REST API, setting the server and the different connection between the different databases. Also helping the frontend as much as possible when I am in advance. This project uses mainly Javascript but needed good knowledge on C#. For the frontend, we build everything with React.js and for the backend, I use Restify and MongoDB with Nodejs.',
		second_text: 'The biggest problem encountered was the countless changes of the requirements. Even if I was following the AGILE method, I needed to refactor parts of the app every week. The second biggest problem was the fact that some necessary documents for building the app were not available. I had to create a second API for communicating with their current app written in C#.',
		image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa00003')
	}
];
