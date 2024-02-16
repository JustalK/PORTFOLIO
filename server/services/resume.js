'use strict';

module.exports = (dbs) => ({
    get_resume: async () => {
        return dbs.get_one({});
    }
});
