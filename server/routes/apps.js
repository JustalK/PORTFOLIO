'use strict';

const express = require('express');
const routes = express.Router();
const constants = require('../libs/consts');

routes.route('/').get(async (request, response) => {
	response.status(constants.SUCCESS_CODE).json({
		name: process.env.API_NAME,
		status: 'RUNNING'
	});
});

module.exports = routes;
