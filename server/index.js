'use strict';

const utils = require('./libs/utils');
const mode = utils.mode(process.env.NODE_ENV);
require('dotenv').config({ path: './env/.env.' + mode });
const server = require('./server');
const database = require('./database');

module.exports = {
	start: async () => {
		database.mongoose_connect(process.env.DB_URI_DATA);
		return server.start(process.env.API_NAME, process.env.BACKEND_HOST, process.env.BACKEND_PORT);
	}
};
