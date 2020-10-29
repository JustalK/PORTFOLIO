var test = require('ava');
var m = require('../../server/server');
var express = require('express');
var routes = express.Router();
test('[STATIC] Testing create_server with correct value', function (t) {
    var server = m.create_server('my_api');
    t.is(typeof server, 'function');
    t.is(server.settings.name, 'my_api');
});
test('[STATIC] Checking create_server does not have any routes', function (t) {
    var server = m.create_server('my_api');
    t.is(server._router, undefined);
});
test('[STATIC] Testing adding_route with cases and correct value', function (t) {
    var server = m.create_server('my_api');
    m.adding_route('apps', '/apps', server);
    var routes = server._router.stack;
    t.not(routes, undefined);
    t.is(routes[2].handle.stack[0].route.stack[0].method, 'get');
});
