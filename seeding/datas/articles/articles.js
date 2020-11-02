'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		title: "Portfolio",
		slug: "portfolio",
		short_description: "A website for describing my work",
		long_description: "laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5873"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5878"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00002")],
		order: -1
	},
    {
        title: "Altantic Grains App",
        slug: "atlantic-grains",
        short_description: "An applications for managing their truncs",
        long_description: "lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq lq",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00001")],
        order: 0
    },
    {
        title: "Predictive Insights",
		slug: "predictive-insights",
        short_description: "A web-app for managing the hiring process",
        long_description: "lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879")
		],
        images: [mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00001")],
        order: 1
    },
    {
        title: "Citiglobal Nudge",
		slug: "citiglobal-nudge",
        short_description: "A backend app for managing the performance of their employee",
        long_description: "le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879")
		],
        images: [],
        order: 2
    },
    {
        title: "Shop AI",
		slug: "shop-ai",
        short_description: "A web-app for finding the best location for malls",
        long_description: "lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879")
		],
        images: [],
        order: 3
    },
    {
        title: "Labonapp",
		slug: "labonapp",
        short_description: "A web-app for making a reservation to a restaurant in Britany",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876")
		],
        images: [],
        order: 4
    }
]
