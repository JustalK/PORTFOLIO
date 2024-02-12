'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		id: mongoose.Types.ObjectId('5f76018c9b16169aaeaa0001'),
		title: 'Presentation',
		first_text: 'This application is a B2B platform developed for Bouygues Telecom. Its primary objective is to enable the company to track the location of both human and material resources across their construction sites.',
		second_text: 'The platform allows you to view all your resources, track their locations throughout the day, access statistics about your construction sites, and obtain various other pieces of information on a dashboard.',
		image: mongoose.Types.ObjectId('5f9d88d3ffed1e07aea00002')
	},
	{
		id: mongoose.Types.ObjectId('5f76018c9b16169aaeaa0002'),
		title: 'Work',
		first_text: 'The platform consists of two dashboards: one for the client and another for the administrator, both developed using Vue.js. The database management is facilitated by Elasticsearch, while the backend is powered by Kuzzle, an IoT platform that leverages Node.js.',
		second_text: 'I was hired to manage a team of five developers, tasked with enhancing the infrastructure, creating new features, and managing new projects for their international clients.',
		image: mongoose.Types.ObjectId('5f9d88d3ffed1e07aea00003')
	}
]
