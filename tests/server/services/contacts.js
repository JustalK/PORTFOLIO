'use strict';

const test = require('ava');
const dbs = {
	get_one: (params) => {
		return {firstname: 'test'};
	}
};
const m = require('../../../server/services/contacts')(dbs);

test('[STATIC] Testing the services get my identity contacts', async t => {
	const results = await m.get_my_identity();

	t.is(typeof results, 'object');
	t.is(results.firstname, 'test');
});
