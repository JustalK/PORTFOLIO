'use strict';

const express = require('express');
const routes = express.Router();

routes.route('/').get(async (request, response) => {
    const app = {name: process.env.API_NAME, status: 'RUNNING'};
    response.json(app);
});

module.exports = routes;
