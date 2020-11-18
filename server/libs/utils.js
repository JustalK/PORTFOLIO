'use strict';

module.exports = {
	mode: node_env => {
		return node_env !== undefined ? node_env : 'production';
	},
	is_value_exist: (value) => {
		return value !== undefined;
	},
	add_filter: (filters, key, value) => {
		filters[key] = value;
	},
	add_tags_filter: (filters, key, value) => {
		module.exports.check_and_add_name_filter(filters, key, value, { $in: value });
	},
	add_name_filter: (filters, key, value) => {
		module.exports.check_and_add_name_filter(filters, key, value, { $eq: value });
	},
	add_slug_filter: (filters, key, value) => {
		module.exports.check_and_add_name_filter(filters, key, value, value);
	},
	add_id_filter: (filters, key, value) => {
		module.exports.check_and_add_name_filter(filters, key, value, value);
	},
	check_and_add_name_filter: (filters, key, value, operators) => {
		if (module.exports.is_value_exist(value)) {
			module.exports.add_filter(filters, key, operators);
		}
	}
};
