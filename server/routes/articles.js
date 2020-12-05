'use strict';

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const constants = require('../libs/consts');
const utils = require('../libs/utils');

const filter = queries => {
	const params = {};
	utils.add_tags_filter(params, 'tags', queries.tags);

	return params;
}

// Return the list of all the articles
routes.route('/').get(async (request, response) => {
	const params = filter(request.query);
	const limit = constants.NUMBER_ARTICLES_BY_PAGE;
	const page = request.query.page === undefined ? 0 : Number(request.query.page);

	const total_number_articles = await services.get_count(params);
	const max_page = Math.floor( (total_number_articles - 1) / limit ) + 1;
	const skip = page < 0 ? ( (max_page - (-page % max_page) ) % (max_page) ) * limit : (page % (max_page) ) * limit;
	const datas = await services.get_all_informations(params, skip, limit);
	response.status(constants.SUCCESS_CODE).json(datas);
});

routes.route('/count').get(async (request, response) => {
	const params = filter(request.query);
	const total_number_articles = await services.get_count(params);
	response.status(constants.SUCCESS_CODE).json({total: total_number_articles});
});

routes.route('/menu').get(async (request, response) => {
	const params = filter(request.query);
	const datas = await services.get_all_menu(params);
	response.status(constants.SUCCESS_CODE).json(datas);
});

routes.route('/one').get(async (request, response) => {
	const params = {};
	utils.add_id_filter(params, '_id', request.query.id);
	utils.add_slug_filter(params, 'slug', request.query.slug);
	const populate = request.query.populate == '1' ? true : false;
	if(Object.keys(params).length === 0) {
		response.status(constants.BAD_REQUEST_CODE).json({message: constants.BAD_REQUEST_MESSAGE});
	} else {
		const datas = await services.get_one(params, populate);
		response.status(constants.SUCCESS_CODE).json(datas);
	}
});

module.exports = routes;
