require('dotenv').config({path: './env/.env.' + process.env.NODE_ENV});
const test = require('ava');
const axios = require('axios');
const m = require('../../../server/routes/apps');
const m_index = require('../../../server');
const m_seed = require('../../../seeding/seeder');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let server;

test.before(async () => {
	server = await m_index.start();
	await m_seed.seed();
});

test('[STATIC] Testing the checker of the api apps', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/articles')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	t.is(typeof datas[0], 'object');
	t.not(datas[0]._id, undefined);
	t.not(datas[0].title, undefined);
	t.not(datas[0].slug, undefined);
	t.not(datas[0].short_description, undefined);
	t.not(datas[0].long_description, undefined);
	t.not(datas[0].order, undefined);
	t.not(datas[1]._id, undefined);
});
