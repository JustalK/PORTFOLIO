'use strict';

module.exports = dbs => ({
	get_all: async (params, fields = null, skip = 0, limit = null, populate = null) => {
		return dbs.get_all(params, fields, skip, limit, populate);
	},
	get_all_informations: async (params, skip = 0, limit = null) => {
		return module.exports(dbs).get_all(params, null, skip, limit, 'images');
	},
	get_all_menu: async (params) => {
		return module.exports(dbs).get_all(params, {title: 1, slug: 1});
	},
	get_one: async (params, populate) => {
		if (populate) {
			return dbs.get_one_populated(params);
		} else {
			return dbs.get_one(params);
		}
	},
	get_count: async (params) => {
		return dbs.get_count(params);
	}
});
