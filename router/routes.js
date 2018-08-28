'use strict'

var express = require('express')
var routes = express.Router()

// Get the schema from mongoose in the models folder
var Article = require('../models/Article')
var Tag = require('../models/Tag')
var Image = require('../models/Image')

// Return the list of all the articles
routes.route('/articles/all').get((req, res, next) => {
	Article.find().populate({path: 'tags',select: 'name'}).exec((err, articles) => {
		if (err) return next(new Error(err))

		res.json(articles)
	})
})

routes.route('/article/:name').get((req, res, next) => {
	Article.find({slug: req.params.name }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
		if (err) return next(new Error(err))

		res.json(article)
	})
})

routes.route('/tags/all').get((req, res, next) => {
	Tag.find((err, tags) => {
		if (err) return next(new Error(err))

		res.json(tags)
	})
})

// Adding an article with the title "Latsuj"
routes.route('/add').get((req, res, next) => {
	/**
	Tag.create(
			{ name: "PHP" },
			(err, article) => {
				if(err) res.status(400).send('Unable to create')
			}
	)
	Tag.create(
			{ name: "HTML" },
			(err, article) => {
				if(err) res.status(400).send('Unable to create')
			}
	)
	**/
	Article.create(
		{ title: "latsuj" },
		(err, article) => {
			if(err) res.status(400).send('Unable to create')
			res.status(200).json(article)
		}
	)
})

module.exports = routes