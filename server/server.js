'use strict';

const utils = require('./libs/utils');
const mode = utils.mode(process.env.NODE_ENV);
require('dotenv').config({ path: './env/.env.' + mode });
const express = require('express');
const history = require('connect-history-api-fallback');
const logs = require('./libs/logs');
const helmet = require('helmet');

module.exports = {
	create_server: (name, port) => {
		const server = express();
		server.set('port', port);
		server.set('name', name);
		return server;
	},
	adding_route: (filename_routes, routes_url, server) => {
		const routes = require('./routes/' + filename_routes);
		server.use(routes_url, routes);
	},
	start: async (name, host, port) => {
		return new Promise((resolve) => {
			const server = module.exports.create_server(name, port);
			module.exports.adding_route('apps', '/api/apps', server);
			module.exports.adding_route('articles', '/api/articles', server);
			module.exports.adding_route('tags', '/api/tags', server);
			module.exports.adding_route('contacts', '/api/contacts', server);
			module.exports.adding_route('pages', '/api/pages', server);
			module.exports.adding_route('slides', '/api/slides', server);
			module.exports.adding_route('jobs', '/api/jobs', server);
			server.use(history());
			server.use(helmet());

			server.use('/api/documentation', express.static('documentation'));
			server.use('/', express.static(process.env.FOLDER));

			server.listen(port, host, () => {
				logs.info(name + ' listening at ' + port);
				resolve(server);
			});
		});
	}
};
