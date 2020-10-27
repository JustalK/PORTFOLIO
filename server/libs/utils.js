module.exports = {
	is_value_exist: (value) => {
		return value !== undefined;
	},
	add_filter: (filters, key, value) => {
		filters[key] = value;
	},
	add_tags_filter: (filters, key, value) => {
		if (module.exports.is_value_exist(value)) {
			module.exports.add_filter(filters, key, { $all: value });
		}
	}
};
