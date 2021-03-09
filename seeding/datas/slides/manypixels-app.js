'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b11200aaaaa0001'),
		title: 'Presentation',
		first_text: 'This project is the paid side of the website of Manypixels. It\'s a internationnal services company who will work on any design for a monthly fee. The app for the paid user is separated from the website.',
		second_text: 'The goal of the customer app is to manage the queries of the customer. The manager assign designer to a project and communicate with the customer. Finally, the admin can review the whole customer and group people by team.',
		image: mongoose.Types.ObjectId('5f9d88d3fddd1e00aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b11200aaaaa0002'),
		title: 'Work',
		first_text: 'The app was already built when I join the team, so my main purpose was to improve the app and adding functionnalities like a notification system, chat system with drag and drop...',
		second_text: 'I got challenge on this projet because the project. The deadline was quite short but most of all, the architecture and the convention was not respected by the previous developer. So I have a lot of thing to refactor or to understand the functionnalities.',
		image: mongoose.Types.ObjectId('5f9d88d3fddd1e00aaa00003')
	}
];
