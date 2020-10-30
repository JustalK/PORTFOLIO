'use strict';

module.exports = dbs => ({
	get_my_identity: async () => {
		return dbs.get_one({firstname: 'kevin', lastname: 'justal'});
	}
});
