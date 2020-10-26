const restify = require('restify');
const logs = require('./libs/logs');

module.exports = {
	create_server: name => {
		const server_options = {name};
		const server = restify.createServer(server_options);
		server.use(restify.plugins.queryParser({mapParams: true}));
		return server;
	},
	adding_route: (filename_routes, server) => {
		const route = require('./routes/' + filename_routes);
		route(server);
	},
	start: async (name, host, port) => {
		return new Promise((resolve, reject) => {
			const server = module.exports.create_server(name);
			module.exports.adding_route('cases', server);

			server.listen(port, host, () => {
				logs.info(server.name + ' listening at ' + server.url);
			});
		});
	}
};
