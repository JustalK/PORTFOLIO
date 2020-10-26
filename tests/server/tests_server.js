const test = require('ava');
const m = require('../../server/server');
const express = require('express');
const routes = express.Router();

test('[STATIC] Testing create_server with correct value', t => {
	const server = m.create_server('my_api');

	t.is(typeof server, 'function');
	t.is(server.settings.name, 'my_api');
});

test('[STATIC] Checking create_server does not have any routes', t => {
	const server = m.create_server('my_api');

	t.is(server._router, undefined);
});

test('[STATIC] Testing adding_route with cases and correct value', t => {
	const server = m.create_server('my_api');
	m.adding_route('apps', '/apps', server);

	const routes = server._router.stack;
	t.not(routes, undefined);
	t.is(routes[2].handle.stack[0].route.stack[0].method, 'get');
});
