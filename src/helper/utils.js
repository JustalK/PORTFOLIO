module.exports = {
	add_class_to_elements_increase(selector, newclass, min, increase) {
		const elements = [...document.querySelectorAll(selector)];
		elements.map((element, index) => {
			setTimeout(() => {
				module.exports.add_class_to_element(element, newclass);
			}, min + index * increase);
		})
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
	}
}
