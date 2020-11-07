'use strict';

module.exports = dbs => ({
	get_one: async (params) => {
		return dbs.get_one(params);
	}
});
