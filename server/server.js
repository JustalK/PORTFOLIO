const express = require("express");
const history = require('connect-history-api-fallback');
const logs = require('./libs/logs');
const path = require('path');

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
		return new Promise((resolve, reject) => {
			const server = module.exports.create_server(name, port);
			module.exports.adding_route('apps', '/api/apps', server);
			module.exports.adding_route('articles', '/api/articles', server);
			module.exports.adding_route('tags', '/api/tags', server);
            server.use(history());
            server.use(express.static("dev"))

            const routes_app = require('./routes/apps');
            const routes_articles = require('./routes/articles');
            const routes_tags = require('./routes/tags');

            server.use('/api/apps', routes_app);
            server.use('/api/articles', routes_articles);
            server.use('/api/tags', routes_tags);

            server.get("/", (req, res) =>
            	res.sendFile('index.html', { root: '/dev' })
            );

			server.listen(port, host, () => {
				logs.info(name + ' listening at ' + port);
				resolve(server);
			});
		});
	}
};
