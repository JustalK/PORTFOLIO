'use strict';

const mode = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'production';
require('dotenv').config({ path: './env/.env.' + mode });
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

test('[STATIC] Testing the api articles without params', async t => {
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

test('[STATIC] Testing the api articles with params', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/articles?page=-1')
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

test('[STATIC] Testing the api one articles with params slug', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/articles/one?slug=portfolio')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	t.is(typeof datas, 'object');
	t.not(datas._id, undefined);
	t.not(datas.title, undefined);
	t.not(datas.slug, undefined);
	t.not(datas.short_description, undefined);
	t.not(datas.long_description, undefined);
	t.not(datas.order, undefined);
	t.not(datas._id, undefined);
});

test('[STATIC] Testing the api one articles with params slug and populate', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/articles/one?slug=portfolio&populate=1')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	console.log('TO DO HERE WHEN DATABASE FILLED UP - CHECK POPULATE');
	t.is(typeof datas, 'object');
	t.not(datas._id, undefined);
	t.not(datas.title, undefined);
	t.not(datas.slug, undefined);
	t.not(datas.short_description, undefined);
	t.not(datas.long_description, undefined);
	t.not(datas.order, undefined);
	t.not(datas._id, undefined);
});

test('[STATIC] Testing the api one articles without params', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/articles/one')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 400);
});

test('[STATIC] Testing the api all tags without params', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/tags')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	t.is(typeof datas[0], 'object');
	t.not(datas[0]._id, undefined);
	t.not(datas[0].name, undefined);
	t.not(datas[1]._id, undefined);
	t.not(datas[1].name, undefined);
});

test('[STATIC] Testing the api contact my identity', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/contacts/my-identity')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	t.is(typeof datas, 'object');
	t.not(datas._id, undefined);
	t.is(datas.firstname, 'kevin');
	t.is(datas.lastname, 'justal');
	t.is(datas.fullname, 'justal kevin');
	t.is(datas.email, 'justal.kevin@gmail.com');
});

test('[STATIC] Testing the api pages with params', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/pages?name=portfolio')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const datas = response.body;
	t.is(typeof datas[0], 'object');
	t.not(datas[0]._id, undefined);
	t.is(datas[0].name, 'portfolio');
	t.is(datas[0].title, 'Work');
	t.not(datas[0].description, undefined);
});

test('[STATIC] Testing the api slides with params', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/slides/one?id=5f76018c9b16e910daaa9001')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 200);
	const data = response.body;
	t.is(typeof data, 'object');
	t.not(data._id, undefined);
	t.not(data.title, undefined);
	t.not(data.first_text, undefined);
	t.not(data.second_text, undefined);
	t.not(data.image, undefined);
});

test('[STATIC] Testing the api slides with no params', async t => {
	const response = await new Promise((resolve, reject) => {
		chai.request(server).get('/api/slides/one')
			.end((err, response) => {
				resolve(response);
			});
	});

	t.is(response.status, 400);
});
