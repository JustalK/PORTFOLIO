'use strict';

const test = require('ava');
const dbs = {
	get_all: (params, fields, skip, limit, populate) => {
		return [params, fields, skip, limit, populate];
	}
};
const m = require('../../../server/services/articles')(dbs);

test('[STATIC] Testing the services get all articles with full param', async t => {
	const params = {tags: 'test'};
	const results = await m.get_all(
		params,
		{name: 1},
		11,
		4,
		'images'
	);

	t.is(results[0], params);
	t.is(results[1].name, 1);
	t.is(results[2], 11);
	t.is(results[3], 4);
	t.is(results[4], 'images');
});

test('[STATIC] Testing the services get all articles without full param', async t => {
	const params = {tags: 'test'};
	const results = await m.get_all(
		params
	);

	t.is(results[0], params);
	t.is(results[1], null);
	t.is(results[2], 0);
	t.is(results[3], null);
	t.is(results[4], null);
});
