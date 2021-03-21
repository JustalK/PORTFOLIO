'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16106aaaaa0001'),
		title: 'Presentation',
		first_text: 'This project is a personal project. I was interested in searching different websites simulatenously an anime. So I made my own API.',
		second_text: 'My goal is simple but need a lot of effort. I scrapped every website of anime to get their links for downloading or watching anime.',
		image: mongoose.Types.ObjectId('5f9d88d3faed1e07aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16106aaaaa0002'),
		title: 'Work',
		first_text: 'I work for fun on my free time. I made everything using Node.js, Restify that I love for creating the end point and MongoDB for the database. I put significant attention to the documentation and the tests using Ava.',
		second_text: 'The hard part was that most websites are using cloudflare. The scrap of website becomes a lot more complicated. It is simple to bypass the waiting protection of cloudflare with puppeteer but protection which needs AI are very hard.',
		image: mongoose.Types.ObjectId('5f9d88d3faed1e07aaa00003')
	}
]
