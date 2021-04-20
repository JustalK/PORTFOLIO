'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e91aaabb0001'),
		title: 'Presentation',
		first_text: 'This project is a website made for multiple client but mainly for Transcom. It\'s a Philippines company who is specialized in providing customer care, sales, technical support and credit management services.',
		second_text: 'The goal here was to create a website for transforming data from different sources into a simple nudge. A nudge in our application is a simple message trying to push an individu to a desired direction.',
		image: mongoose.Types.ObjectId('5f9d88d3feee1e00aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16e91aaabb0002'),
		title: 'Work',
		first_text: 'This project was a 6 man job. I was the lead backend developer of a small team of 3. We build everything with Node.js, Express and Python. For the fronted, it was React.',
		second_text: 'In addition, I was also the Dev Operator. I setup the server on AWS, I connected 2 differents branches of bitbucket on two different servers using the pipeline. I also added the Kubernetes on the server for managing the docker image. I setup Coralogix for helping the team with the log.',
		image: mongoose.Types.ObjectId('5f9d88d3feee1e00aaa00003')
	}
];
