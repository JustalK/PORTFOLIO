const path = require('path');
const filename = path.basename(__filename, '.js');

module.exports = dbs => ({
	get_all: async (params, skip = 0, limit = null) => {
		return dbs.get_all(params, skip, limit);
	},
	get_count: async (params) => {
		return dbs.get_count(params);
	}
});
