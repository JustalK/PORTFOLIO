'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16101aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a website for Odyssea. It's a french association who organize event and fight for the breast's cancer. This is the main website of the company.",
		second_text: "The goal was to make a website following the color of the association with a shop and blog. They also wanted something dynamic with a newsletter system.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16101aaaaa0002"),
		title: "Work",
		first_text: "I work with a small team on this project. I was in charge of the implementation of the newsletter and some pages of the websites. The website was made with WordPress and jQuery. For the dabase, it was PhpMyAdmin.",
		second_text: "One of my first professional project with WordPress. I obviously fight my way into the CMS but I manage to give a good result in the end. So I became at the end the one who maintain the website.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
