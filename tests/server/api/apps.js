require('dotenv').config({path: './env/.env.' + process.env.NODE_ENV});
const test = require('ava');
const axios = require('axios');
const m = require('../../../server/routes/apps');
const m_index = require('../../../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let server;

test.before(async () => {
	server = await m_index.start();
});

test('[STATIC] Testing the checker of the api apps', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/apps')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	t.is(datas.name, 'JUSTALK-SERVER');
	t.is(datas.status, 'RUNNING');
});
