'use strict';

module.exports = {
	is_value_exist: (value) => {
		return value !== undefined;
	},
	add_filter: (filters, key, value) => {
		filters[key] = value;
	},
	add_tags_filter: (filters, key, value) => {
		module.exports.check_and_add_name_filter(filters, key, value, { $all: value });
	},
	add_name_filter: (filters, key, value) => {
		module.exports.check_and_add_name_filter(filters, key, value, { $eq: value });
	},
	check_and_add_name_filter: (filters, key, value, operators) => {
		if (module.exports.is_value_exist(value)) {
			module.exports.add_filter(filters, key, operators);
		}
	}
};
