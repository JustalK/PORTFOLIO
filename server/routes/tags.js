"use strict";

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);
const constants = require('../libs/consts');

// Return the list of all the articles
routes.route('/').get(async (request, response, next) => {
    const datas = await services.get_all();
    response.json(datas);
});

module.exports = routes;
