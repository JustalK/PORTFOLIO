'use strict';

const mongoose = require('mongoose');

module.exports = [
	{
		title: "Portfolio",
		slug: "portfolio",
		short_description: "A website for showing some of my work to the world.",
		long_description: "laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa laa",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5873"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5878"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5881"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5882"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5883"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5884"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5891"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5892"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5872")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00002")],
		order: -1
	},
    {
        title: "Altantic Grains App",
        slug: "atlantic-grains",
        short_description: "An applications for managing clients, sales, processes, trucks, stocks and deliveries.",
        long_description: "A complexe React application for android and Iphone coupled with a Node.js for the backend connected to MongoDB and MS SQL Server.",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5885"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5882"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5892"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00003")],
		slides: [
			mongoose.Types.ObjectId("5f76018c9b16e910daaa1001"),
			mongoose.Types.ObjectId("5f76018c9b16e910daaa1002")
		],
		background_image: mongoose.Types.ObjectId("5f9d88d3faed1e8caaa00001"),
        order: 0
    },
    {
        title: "Predictive Insights",
		slug: "predictive-insights",
        short_description: "A web-application for helping on the managing of employees and on the hiring process by using artificial intelligence.",
        long_description: "lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw lw",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5885"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5882"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5892"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00001")],
        order: 1
    },
	{
		title: "COVID19PH API",
		slug: "covid19ph-api",
		short_description: "An REST API for getting all the informations about the cases in the Philippines by using the data from the csv of DOH.",
		long_description: "lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5872")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00027")],
		order: 2
	},
    {
        title: "Citiglobal Nudge",
		slug: "citiglobal-nudge",
        short_description: "A backend app for keeping the whole company updated about the work of their employees and managers.",
        long_description: "le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5885"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00004")],
        order: 2
    },
    {
        title: "Bounty AI",
		slug: "bounty-ai",
        short_description: "A web-app for predicting the best location for building a futur malls by using artificial intelligence.",
        long_description: "lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5877"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5879"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5885"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5892"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00005")],
        order: 3
    },
    {
        title: "Labonapp",
		slug: "labonapp",
        short_description: "A web-app for discovering the restaurant around you, getting the latest promotions and making reservations.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5874"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5887"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5892"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00006")],
        order: 4
    },
    {
        title: "Happee",
		slug: "happee",
        short_description: "A website for renting a motorvan to a private individual, discovering new destinations and getting informations about travelling in motorvan.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5887"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5890"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00013")],
        order: 5
    },
    {
        title: "ID Newsletter",
		slug: "id-newsletter",
        short_description: "A website for sending, programming and designing newsletter with a very simple UI.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00014")],
        order: 6
    },
    {
        title: "Promarine",
		slug: "promarine",
        short_description: "A website for showing the latest news of promarine and selling boats.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00016")],
        order: 7
    },
    {
        title: "Saona Villas",
		slug: "saona-villas",
        short_description: "A multilanguage website for renting beautiful villas in different countries accross the world.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00018")],
        order: 8
    },
    {
        title: "Maison Lucas",
		slug: "maison-lucas",
        short_description: "A website for selling premium sea food and ordering special sea food meal from a professional chef.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5875"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00015")],
        order: 9
    },
    {
        title: "Gouter Magique",
		slug: "gouter-magique",
        short_description: "A website for showing the latest delicious cake from the famous Wahou factory.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00012")],
        order: 10
    },
    {
        title: "Le gout du vin",
		slug: "le-gout-du-vin-56",
        short_description: "A website for giving all the latest news and events about wines and some alcohol in Britany.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00011")],
        order: 11
    },
    {
        title: "Finister Assurance",
		slug: "finistere assurance",
        short_description: "The official website of the Finister Assurance insurrance based in Britany.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00010")],
        order: 12
    },
    {
        title: "Sails Concept",
		slug: "sails-concept",
        short_description: "A website for presenting boats of Sails Concepts and for creating and designing your custom sails.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00017")],
        order: 13
    },
    {
        title: "David Paysages",
		slug: "david-paysages",
        short_description: "A website for presenting the work of the landscaper and artist David Paysage.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5888"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00008")],
        order: 14
    },
    {
        title: "EMD Pro",
		slug: "emd-pro",
        short_description: "A website for selling professional equipements for armies. No weapons are sold on this website !",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5875"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00009")],
        order: 15
    },
    {
        title: "Zipworld",
		slug: "zipworld",
        short_description: "A website for presenting the tours of Zipworld and booking flights at the lowest price possible.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5889"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5887"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00023")],
        order: 16
    },
    {
        title: "Onarto",
		slug: "onarto",
        short_description: "A website for selling Thai painting and scultures, presenting the best events in Bangkok involving arts and giving informations about arts in general.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5875"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5884"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00024")],
        order: 17
    },
    {
        title: "Odyssea",
		slug: "odyssea",
        short_description: "The official website for the association Odyssea who create events and raise money for the research against the breast cancer.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5875"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5884"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00021")],
        order: 18
    },
    {
        title: "Le monde de Zip",
		slug: "le-monde-de-zip",
        short_description: "A website giving a lot of advises about what are the countries to visit or those who are to be avoid.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5889"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5887"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00020")],
        order: 19
    },
    {
        title: "El Mercado",
		slug: "el-mercado",
        short_description: "A website for selling imported food from Europe in Thailand.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5875"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5884"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00019")],
        order: 20
    },
    {
        title: "Ogocare",
		slug: "ogocare",
        short_description: "A website for finding and getting informations about the best hospital in Thailand around you.",
        long_description: "ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly ly",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5889"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5880"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5876"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5886"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5887"),
			mongoose.Types.ObjectId("5f95461688489acdd8ee5871")
		],
        images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00022")],
        order: 21
    },
	{
		title: "Pornhub API",
		slug: "pornhub-api",
		short_description: "A REST API for scrapping the famous porn website",
		long_description: "lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5872")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00025")],
		order: 22
	},
	{
		title: "Anime API",
		slug: "anime-api",
		short_description: "A REST API for finding streaming or downloading links for animes on multiple website instantly.",
		long_description: "lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr lr",
		tags: [
			mongoose.Types.ObjectId("5f95461688489acdd8ee5872")
		],
		images: [ mongoose.Types.ObjectId("5f9d88d3faed1e8c4dc00026")],
		order: 23
	}
]
