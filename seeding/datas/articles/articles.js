'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		title: 'Portfolio',
		slug: 'portfolio',
		short_description: 'A website for showing some of my work to the world.',
		long_description: 'A simple but effective website written with Vue.js, Node.js and Express for presenting my professional work and my personnal project.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5872'),  // Personal Project
			mongoose.Types.ObjectId('5f95461688489acdd8ee5873'), // Vue.js
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'), // Javascript
			mongoose.Types.ObjectId('5f95461688489acdd8ee5878'), // Express
			mongoose.Types.ObjectId('5f95461688489acdd8ee5879'), // MongoDB
			mongoose.Types.ObjectId('5f95461688489acdd8ee5881'), // Ava
			mongoose.Types.ObjectId('5f95461688489acdd8ee5882'), // Swagger
			mongoose.Types.ObjectId('5f95461688489acdd8ee5883'), // Webpack
			mongoose.Types.ObjectId('5f95461688489acdd8ee5884'), // Less
			mongoose.Types.ObjectId('5f95461688489acdd8ee5892'), // EsLint
			mongoose.Types.ObjectId('5f95461688489acdd8ee5901'), // Travis
			mongoose.Types.ObjectId('5f95461688489acdd8ee5905'), // Node.js
			mongoose.Types.ObjectId('5f95461688489acdd8ee5904'), // Docker
			mongoose.Types.ObjectId('5f95461688489acdd8ee5908') // Jenkins
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00002')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa9001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa9002'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa9003'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa9004')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa80001'),
		order: -1
	},
	{
		title: 'Manypixels Website',
		slug: 'manypixels-website',
		short_description: 'The static website of Manypixels.co',
		long_description: 'A static website written with Next.js, Bulma, Sass. The content of the website arrive from GraphCms. The website is also linked to Hubspot.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871'), // Professional projects
			mongoose.Types.ObjectId('5f95461688489acdd8ee5873'), // Next.js
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'), // Javascript
			mongoose.Types.ObjectId('5f95461688489acdd8ee5878'), // Express
			mongoose.Types.ObjectId('5f95461688489acdd8ee5903'), // GraphCms
			mongoose.Types.ObjectId('5f95461688489acdd8ee5907'), // Typescript
			mongoose.Types.ObjectId('5f95461688489acdd8ee5884'), // Less
			mongoose.Types.ObjectId('5f95461688489acdd8ee5892'), // EsLint
			mongoose.Types.ObjectId('5f95461688489acdd8ee5905'), // Node.js
			mongoose.Types.ObjectId('5f95461688489acdd8ee5894'), // SEO
			mongoose.Types.ObjectId('5f95461688489acdd8ee5909'), // Bulma
			mongoose.Types.ObjectId('5f95461688489acdd8ee5874'), // React
			mongoose.Types.ObjectId('5f95461688489acdd8ee5910') // Hubspot
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00000')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b11100aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b11100aaaaa0002'),
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3fddd1e00aaa00001'),
		order: -1
	},
	{
		title: 'Altantic Grains App',
		slug: 'atlantic-grains',
		short_description: 'An applications for managing clients, sales, processes, trucks, stocks and deliveries.',
		long_description: 'A complexe React application for android and Iphone coupled with a Node.js for the backend connected to MongoDB and MS SQL Server.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871'), // Professional projects
			mongoose.Types.ObjectId('5f95461688489acdd8ee5874'), // React
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'), // Javascript
			mongoose.Types.ObjectId('5f95461688489acdd8ee5877'), // Restify
			mongoose.Types.ObjectId('5f95461688489acdd8ee5879'), // MongoDB
			mongoose.Types.ObjectId('5f95461688489acdd8ee5885'), // Chai
			mongoose.Types.ObjectId('5f95461688489acdd8ee5882'), // Swagger
			mongoose.Types.ObjectId('5f95461688489acdd8ee5892'), // EsLint
			mongoose.Types.ObjectId('5f95461688489acdd8ee5905'), // Node.js
			mongoose.Types.ObjectId('5f95461688489acdd8ee5906'), // PM2
			mongoose.Types.ObjectId('5f95461688489acdd8ee5908')  // Jenkins
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00003')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa1001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa1002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa00001'),
		order: 0
	},
	{
		title: 'Predictive Insights',
		slug: 'predictive-insights',
		short_description: 'A web-application for helping on the managing of employees and on the hiring process by using artificial intelligence.',
		long_description: 'A React App for predicting the behavior of your employee and helping to make the right decision at the right moment with the help of an artificial intelligence.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5874'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5877'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5879'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5885'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5882'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5892'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00001')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa2001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa2002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caa123001'),
		order: 1
	},
	{
		title: 'COVID19PH API',
		slug: 'covid19ph-api',
		short_description: 'An REST API for getting all the informations about the cases in the Philippines by using the data from the csv of DOH.',
		long_description: 'With the cases of covid in Philippines increasing rapidly, I decide to help at my level an create an API that use the latest data from DOH.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5872')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00027')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b00006aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b00006aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caad00001'),
		order: 2
	},
	{
		title: 'Citiglobal Nudge',
		slug: 'citiglobal-nudge',
		short_description: 'A backend app for keeping the whole company updated about the work of their employees and managers.',
		long_description: 'A Restify backend app receiving informations from Typeform and GoogleSheet by webhook and sending different emails to list of employee and manager according to it.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5877'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5879'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5885'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00004')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa3001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa3002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caac00001'),
		order: 2
	},
	{
		title: 'Bounty AI',
		slug: 'bounty-ai',
		short_description: 'A web-app for predicting the best location for building a futur malls by using artificial intelligence.',
		long_description: 'A React app for predicting where is the best place in Manila for building a mall using big data and artifical intelligence.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5874'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5877'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5879'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5885'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5892'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00005')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa4001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa4002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caab00001'),
		order: 3
	},
	{
		title: 'Labonapp',
		slug: 'labonapp',
		short_description: 'A web-app for discovering the restaurant around you, getting the latest promotions and making reservations.',
		long_description: 'A React Native app and a PHP website for discovering the restaurant around you, getting the latest promotions and making reservations.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5874'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5887'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5892'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00006')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa5001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa5002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa60001'),
		order: 4
	},
	{
		title: 'Hapee',
		slug: 'hapee',
		short_description: 'A website for renting a motorvan to a private individual, discovering new destinations and getting informations about travelling in motorvan.',
		long_description: 'A PHP website made from scratch for renting a motorvan to a private individual, discovering new destinations and getting informations about travelling in motorvan.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5887'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5890'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00013')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa6001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa6002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa40001'),
		order: 5
	},
	{
		title: 'ID Newsletter',
		slug: 'id-newsletter',
		short_description: 'A website for sending, programming and designing newsletter with a very simple UI.',
		long_description: 'A custom version of Mailchimp made from scratch with Angular for the frontend and PHP for the backend using PhpMyAdmin database.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5893')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00014')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa7001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa7002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa50001'),
		order: 6
	},
	{
		title: 'Promarine',
		slug: 'promarine',
		short_description: 'A website for presenting the latest news of promarine and selling boats.',
		long_description: 'A website made in PHP from scratch using PhpMyAdmin database for presenting the latest news of promarine and selling boats.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00016')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e910daaa8001'),
			mongoose.Types.ObjectId('5f76018c9b16e910daaa8002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8c0a900001'),
		order: 7
	},
	{
		title: 'Saona Villas',
		slug: 'saona-villas',
		short_description: 'A multilanguage website for renting beautiful villas in different countries accross the world.',
		long_description: 'A multilanguage website made in PHP from scratch using PhpMyAdmin database for renting beautiful villas in different countries accross the world.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00018')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e91aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e91aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8c2a900001'),
		order: 8
	},
	{
		title: 'Maison Lucas',
		slug: 'maison-lucas',
		short_description: 'A website for selling premium sea food and ordering special sea food meal from a professional chef.',
		long_description: 'A WordPress website using PhpMyAdmin database for selling premium sea food and ordering special sea food meal from a professional chef.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5875'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00015')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e92aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e92aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa70001'),
		order: 9
	},
	{
		title: 'Gouter Magique',
		slug: 'gouter-magique',
		short_description: 'A website for presenting the latest delicious cake from the famous Wahou factory.',
		long_description: 'A website in PHP made from scratch using PhpMyAdmin database for presenting the latest delicious cake from the famous Wahou factory.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00012')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e93aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e93aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa30001'),
		order: 10
	},
	{
		title: 'Le gout du vin',
		slug: 'le-gout-du-vin-56',
		short_description: 'A website for giving all the latest news and events about wines and some alcohol in Britany.',
		long_description: 'A website in PHP made from scratch using a PhpMyAdmin database about wines and different alcohol from Britany.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00011')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e94aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e94aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caaa10001'),
		order: 11
	},
	{
		title: 'Finistere Assurance',
		slug: 'finistere assurance',
		short_description: 'The official website of the Finister Assurance insurrance based in Britany.',
		long_description: 'A website in PHP made from scratch using PhpMyAdmin database for an insurrance company in Britany.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00010')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e95aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e95aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caafa0001'),
		order: 12
	},
	{
		title: 'Sails Concept',
		slug: 'sails-concept',
		short_description: 'A website for presenting boats of Sails Concepts and for creating and designing your custom sails.',
		long_description: 'A website in PHP made from scratch using PhpMyAdmin database for creating and designing your own custom sails.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00017')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e96aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e96aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8c1a900001'),
		order: 13
	},
	{
		title: 'David Paysages',
		slug: 'david-paysages',
		short_description: 'A website for presenting the work of the landscaper and artist David Paysage.',
		long_description: 'A website in PHP made from scratch using PhpMyAdmin database for presenting the work of the landscaper and artist David Paysage.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5888'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00008')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e97aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e97aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e8caae00001'),
		order: 14
	},
	{
		title: 'EMD Pro',
		slug: 'emd-pro',
		short_description: 'A website for selling professional equipements for armies. No weapons are sold on this website !',
		long_description: 'A WordPress website using a PhpMyAdmin database for selling professional military equipements.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5875'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00009')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e98aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e98aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e81aaf00001'),
		order: 15
	},
	{
		title: 'Zipworld',
		slug: 'zipworld',
		short_description: 'A website for presenting the tours of Zipworld and booking flights at the lowest price possible.',
		long_description: 'A Code Igniter website using a PhpMyAdmin database for booking flights at the lowest price possible.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5889'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5887'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00023')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16e99aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16e99aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e00aaa00001'),
		order: 16
	},
	{
		title: 'Onarto',
		slug: 'onarto',
		short_description: 'A website for selling Thai painting and scultures, presenting the best events in Bangkok involving arts and giving informations about arts in general.',
		long_description: 'A multilanguage WordPress website using a PhpMyAdmin database for selling Thai painting and scultures.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5875'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5884'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00024')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16100aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16100aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e02aaa00001'),
		order: 17
	},
	{
		title: 'Odyssea',
		slug: 'odyssea',
		short_description: 'The official website for the association Odyssea who create events and raise money for the research against the breast cancer.',
		long_description: 'A french WordPress website using a PhpMyAdmin database for the association Odyssea.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5875'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5884'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00021')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16101aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16101aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e04aaa00001'),
		order: 18
	},
	{
		title: 'Le monde de Zip',
		slug: 'le-monde-de-zip',
		short_description: 'A website giving a lot of advises about what are the countries to visit or those who are to be avoid.',
		long_description: 'A Code Igniter website using a PhpMyAdmin database for giving a lot of advises about what are the countries to visit or those who are to be avoid.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5889'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5887'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00020')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16102aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16102aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e05aaa00001'),
		order: 19
	},
	{
		title: 'El Mercado',
		slug: 'el-mercado',
		short_description: 'A website for selling imported food from Europe in Thailand.',
		long_description: 'A multilanguage WordPress website using a PhpMyAdmin database for selling imported food from Europe in Thailand.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5875'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5884'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00019')],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e06aaa00001'),
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16103aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16103aaaaa0002')
		],
		order: 20
	},
	{
		title: 'Ogocare',
		slug: 'ogocare',
		short_description: 'A website for finding and getting information about the best hospitals in Thailand around you.',
		long_description: 'A WordPress website using a PhpMyAdmin database for getting information about the best hospitals in Thailand around you.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5889'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5880'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5876'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5886'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5887'),
			mongoose.Types.ObjectId('5f95461688489acdd8ee5871')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00022')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16104aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16104aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e03aaa00001'),
		order: 21
	},
	{
		title: 'Pornhub API',
		slug: 'pornhub-api',
		short_description: 'A REST API for scrapping the famous porn website',
		long_description: 'Just for fun, I made a REST API for scrapping the content using Puppeteer and Node.js. The code is available on my github.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5872')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00025')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16105aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16105aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e01aaa00001'),
		order: 22
	},
	{
		title: 'Anime API',
		slug: 'anime-api',
		short_description: 'A REST API for finding streaming or downloading links for animes on multiple website instantly.',
		long_description: 'A REST API for scrapping content of different website simultaneously with Node.js, Puppeteer and GOT. The code is available on my github.',
		tags: [
			mongoose.Types.ObjectId('5f95461688489acdd8ee5872')
		],
		images: [ mongoose.Types.ObjectId('5f9d88d3faed1e8c4dc00026')],
		slides: [
			mongoose.Types.ObjectId('5f76018c9b16106aaaaa0001'),
			mongoose.Types.ObjectId('5f76018c9b16106aaaaa0002')
		],
		background_image: mongoose.Types.ObjectId('5f9d88d3faed1e07aaa00001'),
		order: 23
	}
];
