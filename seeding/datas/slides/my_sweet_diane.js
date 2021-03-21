'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b11100aaabb0001'),
		title: 'Presentation',
		first_text: 'This is a personal project made for my wife for the valentine day of 2021.',
		second_text: 'The goal was to show her how much I love the moment I spend with her. So I decided to create an app that she could open everytime anywhere she want for remembering that I am always here for her.',
		image: mongoose.Types.ObjectId('5f9d88d3ffff1e00aaa00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b11100aaabb0002'),
		title: 'Work',
		first_text: 'It was my first project with Flutter and Dart. I worked a bit on a rush because I needed to learn and make everything on a single month.',
		second_text: 'I faced many problems on this project. First, I discovered working with Flutter for making an app available on iOs is hard when you dont have a Mac. Secondly, my knowledge of Flutter was not big enough and learning everything was hard. But I still made it !',
		image: mongoose.Types.ObjectId('5f9d88d3ffff1e00aaa00003')
	}
];
