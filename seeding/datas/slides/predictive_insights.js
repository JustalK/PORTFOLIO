'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa2001"),
		title: "Presentation",
		first_text: "This project is an application made for the Rumarocket. A Filipino tech company who choose to put the AI in an app for helps you find and retain the right people for the right mission to help you steer your company in the right direction.",
		second_text: "The goal was to create an application for easily spotting people struggling in your company, improving the hiring process or even automating it. The projet takes forces by using big datas and artifial intelligences for finding solutions to many problems for the managers. This project was maybe the most exciting work done with Rumarocket. I learnt a lot !",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caa123002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16e910daaa2002"),
		title: "Work",
		first_text: "For this project, I was in charge of the backend and the server. But I also made development on the frontend because I was quite often ahead. For the backend, I did everything with Nodejs, Restify and MongoDB. For the server, I choose to setup everything on AWS with Nginx and PM2. I also use Monit for getting some automatic report. For the frontend, we went with React.",
		second_text: "I did not encountered really big problems on this project but with the time given for the project. I could make sure that everything was written well. So I get times to try things and see what was the best solutions or tools. By example, at the beginning, I use Express but I switch to restify because the performance after test was superior.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caa123003")
	}
]
