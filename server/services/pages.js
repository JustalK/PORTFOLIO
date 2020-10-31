'use strict';

module.exports = dbs => ({
	get_all: async (params) => {
		return dbs.get_all(params);
	}
});
