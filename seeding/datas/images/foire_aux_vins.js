'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
    	id: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa10001"),
    	name: "Foire aux vins Background",
		path: "./assets/imgs/foire-au-vin/background.jpg"
	},
	{
		id: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa10002"),
		name: "Foire aux vins Slide 01",
		path: "./assets/imgs/foire-au-vin/slide_01.jpg"
	},
	{
		id: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa10003"),
		name: "Foire aux vins Slide 02",
		path: "./assets/imgs/foire-au-vin/slide_02.jpg"
	}
]
