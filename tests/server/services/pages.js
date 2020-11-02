'use strict';

const test = require('ava');
const dbs = {
	get_all: (params) => {
		return [params];
	}
};
const m = require('../../../server/services/pages')(dbs);

test('[STATIC] Testing the services get all pages with param', async t => {
	const params = {name: 'test'};
	const results = await m.get_all(
		params
	);

	t.is(results[0], params);
});
