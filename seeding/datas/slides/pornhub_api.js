'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId("5f76018c9b16105aaaaa0001"),
		title: "Presentation",
		first_text: "This project is a personnal project that I made for fun. I got a lot of fun doing it because compare to other website, they do things very differently.",
		second_text: "My goal at the beginning was just to fix a certain github project of someone else and then I realize that they are far in advance in the way of doing thing and no similar open source project exist.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	},
	{
		id: mongoose.Types.ObjectId("5f76018c9b16105aaaaa0002"),
		title: "Work",
		first_text: "I work for fun on my free time. I made everything using Node.js, Restify that I love for creating the end point and MongoDB for the database. I put a delicate attention to the documentation and the tests using Ava.",
		second_text: "The hard part was the reverse engineering on the way to get the download link without a token. The website split the download links between part in a json outside of the link. A simple parser cannot get the link.",
		image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00002")
	}
]
