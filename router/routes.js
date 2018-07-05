'use strict'

var express = require('express')
var routes = express.Router()

// Get the schema from mongoose in the models folder
var Article = require('../models/Article')

// Return the list of all the articles
routes.route('/all').get((req, res, next) => {
	Article.find((err, articles) => {
		if (err) return next(new Error(err))

		res.json(articles)
	})
})

// Adding an article with the title "Latsuj"
routes.route('/add').post((req, res, next) => {
	Article.create(
		{ title: "latsuj" },
		(err, article) => {
			if(err) res.status(400).send('Unable to create')
			res.status(200).json(article)
		}
	)
})

module.exports = routes