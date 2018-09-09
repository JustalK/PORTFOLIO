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

// Return the list of 4 articles max by page
routes.route('/articles/:page').get((req, res, next) => {
	console.log(req.query.request);
	Article.count().exec((err, nbr) => {
		let maxpage = Math.floor((nbr - 1) / 4)+1;
		let skip = req.params.page<0 ? ((maxpage - (-req.params.page%maxpage))%(maxpage))*4 : (req.params.page%(maxpage))*4;
		Article.find().skip(skip).limit(4).populate({path: 'tags',select: 'name'}).exec((err, articles) => {
			if (err) return next(new Error(err))
			
			res.json(articles)
		})
	});
})

// Return the article with a particular slug
routes.route('/article/:name').get((req, res, next) => {
	Article.findOne({slug: req.params.name }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
		if (err) return next(new Error(err))
		res.json(article)
	})
})

// Return the next article
routes.route('/article/next/:order').get((req, res, next) => {
	Article.count().exec((err, nbr) => {
		let order = req.params.order*1+1<nbr ? req.params.order*1+1 : 0;
		Article.findOne({order: order }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
			if (err) return next(new Error(err))
			res.json(article)
		})
	})
})

// Return the previous article
routes.route('/article/prev/:order').get((req, res, next) => {
	Article.count().exec((err, nbr) => {
		console.log(req.params.order);
		let order = req.params.order*1-1>=0 ? req.params.order*1-1 : nbr-1;
		Article.findOne({order: order }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
			if (err) return next(new Error(err))
			res.json(article)
		})
	})
})


// return all the tage of the application
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