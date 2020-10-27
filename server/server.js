const express = require('express');
const history = require('connect-history-api-fallback');
const logs = require('./libs/logs');

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
            server.use(history());
            server.use(express.static('dev'));
            server.use(express.static('documentation'));

            server.get('/api/documentation', (req, res) => {
                console.log('hey');
                res.sendFile('index.html', { root: '/documentation' });
            });

            server.get('/', (req, res) => {
                console.log('hey2');
                res.sendFile('index.html', { root: '/dev' });
            });

            server.listen(port, host, () => {
                logs.info(name + ' listening at ' + port);
                resolve(server);
            });
        });
    }
};
