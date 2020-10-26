const test = require('ava');
const dbs = {
	get_all: (params, skip, limit) => {
		return [params, skip, limit];
	}
};
const m = require('../../../server/services/articles')(dbs);

test('[STATIC] Testing the services get all articles with full param', async t => {
	const params = {tags: 'test'};
	const results = await m.get_all(
		params,
		11,
		4
	);

	t.is(results[0], params);
	t.is(results[1], 11);
	t.is(results[2], 4);
});

test('[STATIC] Testing the services get all articles without full param', async t => {
	const params = {tags: 'test'};
	const results = await m.get_all(
		params
	);

	t.is(results[0], params);
	t.is(results[1], 0);
	t.is(results[2], null);
});
