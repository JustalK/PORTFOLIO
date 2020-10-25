"use strict";

const express = require('express');
const routes = express.Router();
const constants = require('../libs/consts');

routes.route('/').get(async (request, response, next) => {
	const app = {name: process.env.API_NAME, status: 'RUNNING'};
	response.json(app);
})

module.exports = routes;
