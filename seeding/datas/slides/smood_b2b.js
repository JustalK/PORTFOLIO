'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16170aaaaa0001'),
		title: 'Presentation',
		first_text: 'This website was developed as a project for Smood, a company based in Switzerland. The objective of the project was to create a B2B platform that allows companies to offer benefits on Smood to their employees.',
		second_text: 'The platform provides benefits to employees of companies through codes and wallets that can be spent on Smood. This system is similar to restaurant vouchers or Swile in France.',
		image: mongoose.Types.ObjectId('5f9d88d3ffad1e07aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16170aaaaa0002'),
		title: 'Work',
		first_text: 'The frontend of this website was developed using Next.js, while the backend was built with Nest.js. Numerous technologies, including Sonar and Cypress, were utilized to ensure the code is as clean as possible.',
		second_text: 'As the lead developer on this project, I was responsible for selecting the technologies, designing the architecture, and working on every aspect of the project while managing a team of five developers.',
		image: mongoose.Types.ObjectId('5f9d88d3ffad1e07aaa00003')
	}
]
