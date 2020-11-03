module.exports = {
	class_to_elements_increase(selector, newclass, min, increase, fc) {
		const elements = [...document.querySelectorAll(selector)];
		elements.map((element, index) => {
			setTimeout(() => {
				fc(element, newclass);
			}, min + index * increase);
		})
	},
	add_class_to_elements(selector, newclass) {
		module.exports.add_class_to_elements_increase(selector, newclass, 0, 0);
	},
	add_class_to_elements_increase(selector, newclass, min, increase) {
		module.exports.class_to_elements_increase(selector, newclass, min, increase, module.exports.add_class_to_element);
	},
	remove_class_to_elements(selector, newclass) {
		module.exports.remove_class_to_elements_increase(selector, newclass, 0, 0);
	},
	remove_class_to_elements_increase(selector, newclass, min, increase) {
		module.exports.class_to_elements_increase(selector, newclass, min, increase, module.exports.remove_class_to_element);
	},
	add_class_to_element_delay(selector, newclass, delay) {
		setTimeout(() => {
			module.exports.search_add_class_to_element(selector, newclass);
		}, delay);
	},
	search_add_class_to_element(selector, newclass) {
		const element = document.querySelector(selector);
		module.exports.add_class_to_element(element, newclass);
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
	}
}
