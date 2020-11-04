'use strict';

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const constants = require('../libs/consts');
const utils = require('../libs/utils');

// Return the list of all the articles
routes.route('/').get(async (request, response) => {
	const params = {};
	utils.add_tags_filter(params, 'tags', request.query.tags);
	utils.add_id_filter(params, '_id', request.query.id);
	const limit = constants.NUMBER_ARTICLES_BY_PAGE;
	const page = request.query.page === undefined ? 0 : Number(request.query.page);

	const total_number_articles = await services.get_count(params);
	const max_page = Math.floor( (total_number_articles - 1) / limit ) + 1;
	const skip = page < 0 ? ( (max_page - (-page % max_page) ) % (max_page) ) * limit : (page % (max_page) ) * limit;
	const datas = await services.get_all(params, skip, limit);
	response.json(datas);
});

routes.route('/one').get(async (request, response) => {
	const params = {};
	utils.add_id_filter(params, '_id', request.query.id);
	const datas = await services.get_one(params);
	response.json(datas);
});

module.exports = routes;
