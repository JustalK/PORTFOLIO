const path = require('path');
const filename = path.basename(__filename, '.js');

module.exports = dbs => ({
	get_all: async () => {
		return dbs.get_all({});
	}
});
