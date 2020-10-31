'use strict';

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const utils = require('../libs/utils');

// Return the list of all the articles
routes.route('/').get(async (request, response) => {
	const params = {};
	utils.add_name_filter(params, 'name', request.query.name);
	const datas = await services.get_all(params);
	response.json(datas);
});

module.exports = routes;
