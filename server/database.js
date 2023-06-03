'use strict';

const mongoose = require('mongoose');
const logs = require('./libs/logs');

module.exports = {
	mongoose_connect: (db_uri) => {
		logs.info('Database: ' + db_uri);
		mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true });
	}
};
