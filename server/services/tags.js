'use strict';

module.exports = dbs => ({
	get_all: async () => {
		return dbs.get_all({});
	}
});
