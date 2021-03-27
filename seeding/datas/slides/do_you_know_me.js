'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b11100aaacc0001'),
		title: 'Presentation',
		first_text: 'This is a personal project made for playing with my wife.',
		second_text: 'The idea of this project came after we were trying to find a game with couple questions. As we did not find anything interesting or free, I decided to create one. The goal is simply, questions will be throw randomly and the couple has to answer to them.',
		image: mongoose.Types.ObjectId('5f9d88d3fccc1e00aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b11100aaacc0002'),
		title: 'Work',
		first_text: 'I made the project in React Native for the frontend part. For the backend, I decided to use Fastify, Apollo Server and a graphQL.',
		second_text: 'I did not faced any big problem on this project. I got a bit challenged with styled-components because when I did this application, this module got some issue with React Native. I bypass the problem by using normal style when it was not possible to use styled-components.',
		image: mongoose.Types.ObjectId('5f9d88d3fccc1e00aaa00003')
	}
];
