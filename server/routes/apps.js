'use strict';

const express = require('express');
const routes = express.Router();

routes.route('/').get(async (request, response) => {
	response.json({
		name: process.env.API_NAME,
		status: 'RUNNING'
	});
});

module.exports = routes;
