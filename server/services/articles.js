'use strict';

module.exports = dbs => ({
	get_all: async (params, skip = 0, limit = null) => {
		return dbs.get_all(params, skip, limit);
	},
	get_one: async (params) => {
		return dbs.get_one(params);
	},
	get_count: async (params) => {
		return dbs.get_count(params);
	}
});
