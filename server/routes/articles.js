"use strict";

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const constants = require('../libs/consts');

// Return the list of all the articles
routes.route('/all').get(async (req, res, next) => {
    const datas = await services.get_all();
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