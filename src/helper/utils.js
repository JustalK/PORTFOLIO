module.exports = {
	class_to_elements_increase(ref_elements, newclass, min, increase, fc) {
		const elements = [...ref_elements];
		elements.map((element, index) => {
			setTimeout(() => {
				fc(element, newclass);
			}, min + index * increase);
		})
	},
	add_class_to_elements_increase(ref_elements, newclass, min, increase) {
		module.exports.class_to_elements_increase(ref_elements, newclass, min, increase, module.exports.add_class_to_element);
	},
	add_class_to_element_delay(element, newclass, delay) {
		setTimeout(() => {
			module.exports.add_class_to_element(element, newclass);
		}, delay);
	},
	toggle_class_to_element(element, newclass) {
		if(element.classList.contains(newclass)) {
			element.classList.remove(newclass);
		} else {
			element.classList.add(newclass);
		}
	},
	add_class_to_element(element, newclass) {
		element.classList.add(newclass);
	},
	remove_class_to_element(element, newclass) {
		element.classList.remove(newclass);
	},
	is_array_empty(array) {
		return array === null || array.length === 0;
	},
	absolute_path_from_relative(path) {
		return module.exports.get_server_address() + '/' + path;
	},
	get_server_address() {
    const port = process.env.PORT ? ':' + process.env.PORT : '';
		return process.env.PROTOCOL + '://' + process.env.HOST + port;
	}
}
