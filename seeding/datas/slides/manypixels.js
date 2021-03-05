'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b11100aaaaa0001'),
		title: 'Presentation',
		first_text: 'This project is the official website of Manypixels. It\'s a internationnal services company who will work on any design for a monthly fee. They wanted a new attractive website for getting more client.',
		second_text: 'The goal was to make a website for presenting what the company can offer you. It was oriented for business by converting the visitor into paid user using GTM Manager, SEO and A/B tests.',
		image: mongoose.Types.ObjectId('5f9d88d3fddd1e00aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b11100aaaaa0002'),
		title: 'Work',
		first_text: 'I work with 2 other developers on this project. It was my first time working with GraphCMS and Next.js. I had a lot to learn but it was a nice experience.',
		second_text: 'The hard parts of this project was first when one of our coworker leave suddenly and I receive his work without any information. The second hard part was the refactoring that I needed to do for being pixel perfect with Figma.',
		image: mongoose.Types.ObjectId('5f9d88d3fddd1e00aaa00003')
	}
];
