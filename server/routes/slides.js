'use strict';

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const constants = require('../libs/consts');
const utils = require('../libs/utils');

routes.route('/one').get(async (request, response) => {
	const params = {};
	utils.add_id_filter(params, '_id', request.query.id);
	if(Object.keys(params).length === 0) {
		response.status(constants.BAD_REQUEST_CODE).json({message: constants.BAD_REQUEST_MESSAGE});
	} else {
		const datas = await services.get_one(params);
		response.status(constants.SUCCESS_CODE).json(datas);
	}

});

module.exports = routes;
