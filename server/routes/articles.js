"use strict";

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const constants = require('../libs/consts');
const utils = require('../libs/utils');

// Return the list of all the articles
routes.route('/').get(async (request, response, next) => {
	const params = {};
	utils.add_tags_filter(params, 'tags', request.query.tags);
	const limit = constants.NUMBER_ARTICLES_BY_PAGE;
	const page = request.query.page === undefined ? 0 : Number(request.query.page);

	const total_number_articles = await services.get_count(params);
	const max_page = Math.floor( (total_number_articles - 1) / limit ) + 1;
	const skip = page < 0 ? ( (max_page - (-page % max_page) ) % (max_page) ) * limit : (page % (max_page) ) * limit;
    const datas = await services.get_all(params, skip, limit);
    response.json(datas);
});

// Return the list of 4 articles max by page
/**
routes.route('/articles/:page').get((req, res, next) => {
    let findQuery = req.query.tags==undefined ? {} : {'tags' : { '$all' : req.query.tags }};
    Article.find(findQuery).countDocuments().exec((err, nbr) => {
        let maxpage = Math.floor((nbr - 1) / 4)+1;
        let skip = req.params.page<0 ? ((maxpage - (-req.params.page%maxpage))%(maxpage))*4 : (req.params.page%(maxpage))*4;
        Article.find(findQuery).skip(skip).limit(4).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, articles) => {
            if (err) return next(new Error(err));

            res.json(articles);
        });
    });
});

// Return the article with a particular slug
routes.route('/article/:name').get((req, res, next) => {
    Article.findOne({slug: req.params.name }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
        if (err) return next(new Error(err));
        res.json(article);
    });
});

// Return the next article
routes.route('/article/next/:order').get((req, res, next) => {
    Article.count().exec((err, nbr) => {
        let order = req.params.order*1+1<nbr ? req.params.order*1+1 : 0;
        Article.findOne({order: order }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
            if (err) return next(new Error(err));
            res.json(article);
        });
    });
});

// Return the previous article
routes.route('/article/prev/:order').get((req, res, next) => {
    Article.count().exec((err, nbr) => {
        console.log(req.params.order);
        let order = req.params.order*1-1>=0 ? req.params.order*1-1 : nbr-1;
        Article.findOne({order: order }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
            if (err) return next(new Error(err));
            res.json(article);
        });
    });
});
**/

module.exports = routes;
