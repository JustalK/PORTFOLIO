'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16169aaaaa0001'),
		title: 'Presentation',
		first_text: 'This website was developed for Smood, a company based in Switzerland. The goal is to provide clients with the opportunity to order meals directly from restaurants and have them delivered to their doorstep.',
		second_text: 'In this project, I primarily focused on the backend and the admin portal to develop new functionalities, such as creating a statistics dashboard for each restaurant and implementing penalties for slow-performing restaurants on their invoices to Smood.',
		image: mongoose.Types.ObjectId('5f9d88d3ffed1e07aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16169aaaaa0002'),
		title: 'Work',
		first_text: 'This project comprises two components: the website, developed in React, and the application, created in React Native. The backend is an Express application integrated with numerous third-party services, including McDonalds, Burger King, PayPal, Bitcoin, and more.',
		second_text: 'I primarily focused on the backend, where the challenging aspect was dealing with legacy code that required refactoring or modifications. Given the apps age of over 10 years, a significant portion of the code lacked comprehensive documentation, making it quite cumbersome to digest large amounts of code sometimes just to add a few lines.',
		image: mongoose.Types.ObjectId('5f9d88d3ffed1e07aaa00003')
	}
]
